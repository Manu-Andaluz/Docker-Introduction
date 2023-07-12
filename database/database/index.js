const mongoose = require("mongoose");
const { URI } = require("../config/envs");

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));

module.exports = {
  Character: require("./schemas/characterSchema"),
  Film: require("./schemas/filmSchema"),
  Planet: require("./schemas/planetSchema"),
};
