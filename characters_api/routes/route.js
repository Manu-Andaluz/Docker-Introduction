const charactersRouter = require("express").Router();
const {
  getAllCharactersController,
  createCharacterController,
} = require("../controllers/controller");

charactersRouter.get("/", getAllCharactersController);
charactersRouter.post("/", createCharacterController);

module.exports = charactersRouter;
