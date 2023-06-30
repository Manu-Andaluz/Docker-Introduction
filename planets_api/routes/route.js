const planetsRouter = require("express").Router();
const { getAllPlanetsController } = require("../controller/controller");

planetsRouter.get("/", getAllPlanetsController);

module.exports = planetsRouter;
