const charactersRouter = require("express").Router();
const axios = require("axios");
// const {
//   getAllCharactersController,
//   createCharacterController,
// } = require("../controllers/controller");

// charactersRouter.get("/", getAllCharactersController);
// charactersRouter.post("/", createCharacterController);

charactersRouter.get("/", async (req, res) => {
  const promise = await axios.get("http://localhost:5005/Character");
  res.status(200).send(promise.data);
});

charactersRouter.get("/:id", async (req, res) => {
  const id = req.params.id;
  const promise = await axios.get(`http://localhost:5005/Character/${id}`);
  res.status(200).send(promise.data);
});

charactersRouter.post("/", async (req, res) => {
  const data = req.body;
  const promise = await axios.post("http://localhost:5005/Character", data);
  res.status(200).send(promise.data);
});

module.exports = charactersRouter;
