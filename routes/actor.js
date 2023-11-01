const express = require('express');

const router = express.Router();
const actorController = require('../controllers/actor_controller');
router.get('/api/actors', actorController.getAllActors);
router.post('/api/actors', actorController.addActor);
router.delete('/api/actors/:id', actorController.deleteActor);

module.exports = router;