import { BestWayTravelDTO } from "../../interface/travelDTO";

export interface IBestWayTravel {
  getBestWayTravel(params: BestWayTravelDTO): Promise<string>;
}
