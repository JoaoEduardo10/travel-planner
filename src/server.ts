import express from "express";
import "dotenv/config";
import { OpenaiTravelResponse } from "./openai/openai-travel-response";
import { Travel_itinerary } from "./services/Travel_itinerary/travel-itinerary";

const server = express();
server.use(express.json());

server.post("/plan", async (req, res) => {
  const openaiTravelResponse = new OpenaiTravelResponse();

  const travel = new Travel_itinerary(openaiTravelResponse);

  const travel_itinerary = await travel.getTravel_itinerary(req.body);

  res.status(201).json(travel_itinerary);
});

const port = process.env.PORT;

server.listen(port, () => console.log(`Server listening port ${port}`));
