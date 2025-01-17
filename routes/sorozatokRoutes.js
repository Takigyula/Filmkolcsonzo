const express = require('express');
const { getSorozatok, getSeries } = require('../controllers/sorozatokRouteControllers');

const router = express.Router();

router.get('/', getSorozatok);
router.get('/series', getSeries);

module.exports = router;
