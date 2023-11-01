const mongoose = require("mongoose");

const movieShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    yearOfRelease: {
      type: Number,
      required: true,
    },
    userRatings: {
      type: Number,
      required: true,
    },
    genre: [String],
    actors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Actor",
      },
    ],
    technicians: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Technician",
      },
    ],
  },
  { timestamps: true }
);

const Movie = mongoose.model("Movie", movieShema);
module.exports = Movie;
