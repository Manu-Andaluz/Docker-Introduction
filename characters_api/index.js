const express = require("express");
const morgan = require("morgan");
const charactersRouter = require("./routes/route");
const { handleErrors } = require("./utils/index");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use("/characters", charactersRouter);

server.use(handleErrors);

server.use("*", (req, res) => {
  res.status(404).send("Not found");
});

server.listen(5002, () => {
  console.log("Running character api in port 5002");
});
