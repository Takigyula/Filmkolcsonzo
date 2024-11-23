const express = require('express');
const { postRegister } = require('../controllers/registerRouteControllers');

const router = express.Router();

router.post('/', postRegister);

module.exports = router;
