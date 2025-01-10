const express = require('express');
const { getSorozatok } = require('../controllers/sorozatokRouteControllers');

const router = express.Router();

router.get('/', getSorozatok);
// router.get('/', getFilms);

module.exports = router;
