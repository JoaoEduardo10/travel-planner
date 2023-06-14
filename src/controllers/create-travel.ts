import { Request } from "express";
import { TravelDTO } from "../interface/travelDTO";
import { CControllers, MessageBodyDTO, ResponseDTO } from "./protocols";
import { ITravelRepository } from "../repositories/protocols";

export class TravelController implements CControllers {
  constructor(private readonly createTravelRepositor: ITravelRepository) {}

  async handle(
    req: Request<{}, {}, TravelDTO>
  ): Promise<ResponseDTO<MessageBodyDTO>> {
    const {
      best_way_travelPromise,
      travel_itineraryPromise,
      violence_infoPromise,
      weatherPromise,
    } = this.createTravelRepositor.getTravelTextPromise(req.body);

    const [best_way_travel, travel_itinerary, weather, violence_info] =
      await Promise.all([
        best_way_travelPromise,
        travel_itineraryPromise,
        weatherPromise,
        violence_infoPromise,
      ]);

    const message = {
      best_way_travel,
      travel_itinerary,
      weather,
      violence_info,
    };

    return {
      body: message,
      statusCode: 201,
    };
  }
}
