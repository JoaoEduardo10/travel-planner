import express from "express";
import "dotenv/config";
import { Openai } from "./openai/openai";
import { BestWayTravel } from "./services/best_way_travel/best_way_travel";
import { TravelController } from "./controllers/create-travel";

const server = express();
server.use(express.json());

const travel = new TravelController();

server.post("/plan", travel.handle);

const port = process.env.PORT;

server.listen(port, () => console.log(`Server listening port ${port}`));
