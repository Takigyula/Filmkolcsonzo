const express = require('express');
const { getSorozatok } = require('../controllers/sorozatokRouteControllers');

const router = express.Router();

router.get('/', getSorozatok);

module.exports = router;
