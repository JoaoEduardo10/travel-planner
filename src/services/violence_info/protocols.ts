import { Violence_infoDTO } from "../../interface/travelDTO";

export interface IViolence_info {
  getViolence_info(params: Violence_infoDTO): Promise<string>;
}
