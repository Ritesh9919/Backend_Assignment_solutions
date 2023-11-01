const express = require('express');

const router = express.Router();
const movieController = require('../controllers/movie_controller');
router.get('/api/movies', movieController.getAllMovies);
router.post('/api/movies', movieController.addMovie);
router.get('/api/movies/:id', movieController.getSingalMovie);
router.put('/api/movies/:id', movieController.updateMovie);


module.exports = router;