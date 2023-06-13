import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.status(200).send("tudo ok");
});

const port = 3333;

server.listen(port, () => console.log(`Server listening port ${port}`));
