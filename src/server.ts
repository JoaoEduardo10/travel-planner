import express from "express";
import "dotenv/config";
import { OpenaiTravelResponse } from "./openai/openai-travel-response";

const server = express();

server.get("/", async (req, res) => {
  const getMessage = new OpenaiTravelResponse();

  const message = await getMessage.getTravelResponse(
    "voÇe sabe qual a melhor rota para ir de regeneração do piaui ate teresina do piaui?"
  );

  res.status(200).send(message);
});

const port = process.env.PORT;

server.listen(port, () => console.log(`Server listening port ${port}`));
