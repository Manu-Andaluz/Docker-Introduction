const films = require("../data/films.json");

const getAllMovies = () => {
  return films;
};

module.exports = { getAllMovies };
