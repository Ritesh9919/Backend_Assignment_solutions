const express = require('express');

const router = express.Router();
const technicianController = require('../controllers/technician_controller');
router.get('/api/technicians', technicianController.getAllTechnicians);
router.post('/api/technicians', technicianController.addTechnician);



module.exports = router;