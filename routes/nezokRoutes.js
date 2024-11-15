const express = require('express');
const { getNezok } = require('../controllers/nezokRouteControllers');

const router = express.Router();

router.get('/', getNezok);

module.exports = router;