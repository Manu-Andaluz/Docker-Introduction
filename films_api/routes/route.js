// const { getAllMoviesController } = require("../controller/controller");
const axios = require("axios");
const filmRouter = require("express").Router();

// filmRouter.get("/", getAllMoviesController);

filmRouter.get("/", async (req, res) => {
  const promise = await axios.get("http://database:5005/Film");
  res.status(200).send(promise.data);
});

filmRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const promise = await axios.get(`http://database:5005/Film/${id}`);
  res.status(200).send(promise.data);
});

filmRouter.post("/", async (req, res) => {
  const data = req.body;
  const promise = await axios.post("http://database:5005/Film", data);
  res.status(200).send(promise.data);
});

module.exports = filmRouter;
