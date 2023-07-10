const planetsRouter = require("express").Router();
const axios = require("axios");
// const { getAllPlanetsController } = require("../controller/controller");

// planetsRouter.get("/", getAllPlanetsController);

planetsRouter.get("/", async (req, res) => {
  const promise = await axios.get("http://database:5005/Planet");
  res.status(200).send(promise.data);
});

planetsRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const promise = await axios.get(`http://database:5005/Planet/${id}`);
  res.status(200).send(promise.data);
});

planetsRouter.post("/", async (req, res) => {
  const data = req.body;
  const promise = await axios.post("http://database:5005/Planet", data);
  res.status(200).send(promise.data);
});

module.exports = planetsRouter;
