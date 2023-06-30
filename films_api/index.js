const express = require("express");
const morgan = require("morgan");
const filmRouter = require("./routes/route");
const { handleErrors } = require("./utils/index");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use("/films", filmRouter);

server.use(handleErrors);

server.use("*", (req, res) => {
  res.status(404).send("Not found");
});

server.listen(5001, () => {
  console.log("Running films api in port 5001");
});
