const express = require('express');
const { getFoglalasok } = require('../controllers/foglalasokRouteControllers');

const router = express.Router();

router.get('/', getFoglalasok);

module.exports = router;
