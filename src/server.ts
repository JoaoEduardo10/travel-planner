import express from "express";
import "dotenv/config";
import { OpenaiTravelResponse } from "./openai/openai-travel-response";
import { Violence_info } from "./services/violence_info/violence-info";

const server = express();
server.use(express.json());

server.post("/plan", async (req, res) => {
  const openaiTravelResponse = new OpenaiTravelResponse();

  const violence_info = new Violence_info(openaiTravelResponse);

  const violence_infoDTO = await violence_info.getViolence_info(req.body);

  res.status(201).json(violence_infoDTO);
});

const port = process.env.PORT;

server.listen(port, () => console.log(`Server listening port ${port}`));
