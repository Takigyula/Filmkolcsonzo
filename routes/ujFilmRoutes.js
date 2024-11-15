const express = require('express');
const {
    getUjFilm,
    postUjFilm,
} = require('../controllers/ujFilmRouteControllers');

const router = express.Router();

router.get('/', getUjFilm);
router.post('/', postUjFilm);

module.exports = router;
