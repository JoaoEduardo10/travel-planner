import "express-async-errors";
import express from "express";
import "dotenv/config";
import { globalsErrors } from "./middlewares/global-errors";
import { router } from "./router";
import swagger from "swagger-ui-express";
import swaggerDocs from "./swagger.json";
import cors from "cors";

const server = express();
server.use(express.json());
server.use(cors());

server.use(
  "/travel-planner/documentation",
  swagger.serve,
  swagger.setup(swaggerDocs)
);

server.use(router);
server.use(globalsErrors);

export { server };
