const mongoose = require("mongoose");
const { DATA_BASE_URI } = require("../config/envs");

mongoose
  .connect(
    "mongodb+srv://manuandaluz:Kyg6h6XE6kkJDvIx@cluster1.wn1nu1z.mongodb.net/star_wars",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("MongoDB connection established..."))
  .catch((error) => console.error("MongoDB connection failed:", error.message));

module.exports = {
  Character: require("./schemas/characterSchema"),
  Film: require("./schemas/filmSchema"),
  Planet: require("./schemas/planetSchema"),
};
