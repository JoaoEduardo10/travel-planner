import { Travel_itineraryDTO } from "../../interface/travelDTO";

export interface ITravel_itinerary {
  getTravel_itinerary(params: Travel_itineraryDTO): Promise<string>;
}
