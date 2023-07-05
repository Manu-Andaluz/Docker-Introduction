const mongoose = require("mongoose");

const filmSchema = new mongoose.Schema({
  _id: { type: String },
  title: { type: String },
  opening_crawl: { type: String },
  director: { type: String },
  producer: { type: String },
  release_date: { type: Date },
  characters: [{ type: String, ref: "Character" }],
  planets: [{ type: String, ref: "Planet" }],
});

filmSchema.statics.list = async function () {
  return await this.find()
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
};

filmSchema.statics.upsert = async function (film) {
  return await this.create(film);
};

const Film = mongoose.model("Film", filmSchema);

module.exports = Film;
