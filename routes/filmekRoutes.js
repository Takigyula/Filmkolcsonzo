const express = require('express');
const {
    getFilmek,
    getFilms,
} = require('../controllers/filmekRouteControllers');

const router = express.Router();

router.get('/', getFilmek);
router.get('/films', getFilms);

module.exports = router;
