const Movie = require("../models/Movie");

const getAllMovies = async (req, res) => {
  try {
    const query = {};
    if (req.query.actor) {
      query.actors = req.query.actor;
    }
    if (req.query.technician) {
      query.technicians = req.query.technician;
    }

    const movies = await Movie.find(query)
      .populate("actors")
      .populate("technicians");

    res.status(200).json({ success: true, movies:movies });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

const addMovie = async (req, res) => {
  try {
    await Movie.create(req.body);
    res
      .status(201)
      .json({ success: true, message: "Movie created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error!" });
  }
};

const getSingalMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id)
      .populate("actors")
      .populate("technicians");
    if (!movie) {
      res.status(404).json({ error: "Movie not found" });
    }
    res.status(200).json(movie);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findByIdAndUpdate(id, req.body, { new: true });
    if (!movie) {
      res.status(404).json({ error: "Movie not found" });
    }
    res.status(200).json({ message: "Movie uodated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllMovies,
  addMovie,
  getSingalMovie,
  updateMovie,
};
