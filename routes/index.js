const express = require('express');

const router = express.Router();
router.use('/', require('./movie'));
router.use('/', require('./technician'));
router.use('/', require('./actor'));


module.exports = router;