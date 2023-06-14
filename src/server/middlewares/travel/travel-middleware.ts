import { RequestHandler } from "express";
import { TravelDTO } from "../../../interface/travelDTO";
import { Bad_Request } from "../../../server/errors/api-errors";

export const travelMiddleware: RequestHandler<{}, {}, TravelDTO> = async (
  req,
  _res,
  next
) => {
  const { destination, end_date, origin, start_date } = req.body;

  if (!destination) {
    throw new Bad_Request("Adicione um destino!");
  }

  if (!origin) {
    throw new Bad_Request("Adicione uma origem");
  }

  if (!start_date) {
    throw new Bad_Request("Adicione a data de partida");
  }

  if (!end_date) {
    throw new Bad_Request("Adicione a data de chegada");
  }

  next();
};
