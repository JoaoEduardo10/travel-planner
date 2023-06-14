import { Request, Response } from "express";
import { TravelDTO } from "../interface/travelDTO";

export interface CControllers {
  handle(req: Request<{}, {}, TravelDTO>, res: Response): Promise<void>;
}
