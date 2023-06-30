const { getAllPlanets } = require("../services/services");

const getAllPlanetsController = async (req, res, next) => {
  try {
    const allPlanets = getAllPlanets();
    throw new Error("There was an error getting the planets");
    res.status(200).send(allPlanets);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllPlanetsController };
