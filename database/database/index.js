const mongoose = require("mongoose");
const { DATA_BASE_URI } = require("../config/envs");
const Character = require("./schemas/characterSchema");
const Film = require("./schemas/filmSchema");
const Planet = require("./schemas/planetSchema");

mongoose
  .connect(DATA_BASE_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));

Character.get(3).then((res) => console.log(res));

module.exports = {
  Character,
  Film,
  Planet,
};
