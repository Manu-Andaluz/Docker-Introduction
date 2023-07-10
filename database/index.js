const express = require("express");
const morgan = require("morgan");
const router = require("./routes/index");

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use(router);

server.listen(5005, () => {
  console.log("Running planet api in port 5003");
});

module.export = server;
