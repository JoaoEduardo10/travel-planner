import { Router } from "express";
import { travelMiddleware } from "./middlewares/travel/travel-middleware";
import { travelRouter } from "./useCase/travel";

const router = Router();

router.post("/plan", travelMiddleware, travelRouter);

export { router };
