import "express-async-errors";
import express from "express";
import "dotenv/config";
import { travelRouter } from "./useCase/travel";
import { globalsErrors } from "./middlewares/global-errors";

const server = express();
server.use(express.json());

server.post("/plan", travelRouter);
server.use(globalsErrors);

const port = process.env.PORT;

server.listen(port, () => console.log(`Server listening port ${port}`));
