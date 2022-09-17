const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: String,
  genre: String,
  plot: String,
  cast: [{ type: mongoose.Schema.Types.ObjectId, ref: "celebrity" }],
});

const Movie = mongoose.model("movie", movieSchema);

module.exports = { Movie };
