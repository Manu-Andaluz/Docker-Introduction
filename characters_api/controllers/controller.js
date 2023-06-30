const { getAllCharacters } = require("../services/service");
const { ClientError } = require("../errors/index");

const getAllCharactersController = async (req, res, next) => {
  try {
    const characters = getAllCharacters();
    res.status(200).send(characters);
  } catch (error) {
    next(error);
  }
};

const createCharacterController = async (req, res, next) => {
  try {
    const name = req.body;
    if (name) {
      throw new ClientError("Missing data to create a new character", 401);
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllCharactersController, createCharacterController };
