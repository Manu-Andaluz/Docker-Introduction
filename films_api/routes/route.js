const { getAllMoviesController } = require("../controller/controller");
const filmRouter = require("express").Router();

filmRouter.get("/", getAllMoviesController);

module.exports = filmRouter;
