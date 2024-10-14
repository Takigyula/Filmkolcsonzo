const express = require('express');
const { getFilmek } = require('../controllers/filmekRouteControllers');

const router = express.Router();

router.get('/', getFilmek);

module.exports = router;
