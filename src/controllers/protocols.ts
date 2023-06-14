import { Request, Response } from "express";
import { TravelDTO } from "../interface/travelDTO";

export interface MessageBodyDTO {
  best_way_travel: string;
  travel_itinerary: string;
  weather: string;
  violence_info: string;
}

export interface ResponseDTO<B> {
  body: B;
  statusCode: number;
}

export interface CControllers {
  handle(
    req: Request<{}, {}, TravelDTO>,
    res: Response
  ): Promise<ResponseDTO<MessageBodyDTO>>;
}
