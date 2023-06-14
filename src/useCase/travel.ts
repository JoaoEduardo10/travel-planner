import { RequestHandler } from "express";
import { TravelDTO } from "../interface/travelDTO";
import { TravelRepository } from "../repositories/create-travel";
import { TravelController } from "../controllers/create-travel";
import { Openai } from "../openai/openai";

export const travelRouter: RequestHandler<{}, {}, TravelDTO> = async (
  req,
  res
) => {
  const openaiClient = new Openai();

  const travelRepository = new TravelRepository(openaiClient);

  const travelController = new TravelController(travelRepository);

  const { body, statusCode } = await travelController.handle(req);

  res.status(statusCode).json(body);
};
