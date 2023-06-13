import express from "express";
import "dotenv/config";
import { GetTravelResponse } from "./openai/get-travel-response";

const server = express();

server.get("/", async (req, res) => {
  const getMessage = new GetTravelResponse();

  const message = await getMessage.handle(
    "voÇe sabe qual a melhor rota para ir de regeneração do piaui ate teresina do piaui?"
  );

  res.status(200).send(message);
});

const port = process.env.PORT;

server.listen(port, () => console.log(`Server listening port ${port}`));
