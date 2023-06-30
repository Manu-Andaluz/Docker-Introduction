const { getAllMovies } = require("../services/services");

const getAllMoviesController = async (req, res, next) => {
  try {
    const allMovies = getAllMovies();
    res.status(200).send(allMovies);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllMoviesController };
