const planets = require("../data/planets.json");

const getAllPlanets = () => {
  return planets;
};

module.exports = { getAllPlanets };
