import { TravelDTO } from "../../interface/travelDTO";

export interface ITravelRepository {
  getTravelTextPromise(params: TravelDTO): {
    best_way_travelPromise: Promise<string>;
    violence_infoPromise: Promise<string>;
    weatherPromise: Promise<string>;
    travel_itineraryPromise: Promise<string>;
  };
}
