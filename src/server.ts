import "express-async-errors";
import express from "express";
import "dotenv/config";
import { globalsErrors } from "./middlewares/global-errors";
import { router } from "./router";

const server = express();
server.use(express.json());

server.use(router);
server.use(globalsErrors);

const port = process.env.PORT;

server.listen(port, () => console.log(`Server listening port ${port}`));
