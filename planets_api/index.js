const express = require("express");
const morgan = require("morgan");
const planetsRouter = require("./routes/route");
const { handleErrors } = require("./utils/index");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use("/planets", planetsRouter);

server.use(handleErrors);

server.use("*", (req, res) => {
  res.status(404).send("Not found");
});

server.listen(5003, () => {
  console.log("Running planet api in port 5003");
});
