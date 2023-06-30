const express = require("express");
const morgan = require("morgan");
const router = require("./src/routes/index");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(router);

app.use("*", (req, res) => {
  res.status(404).send("Not found");
});

app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
