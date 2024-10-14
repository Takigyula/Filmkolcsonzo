const express = require('express');
const {
    getEgyediFilm,
    deleteEgyediFilm,
} = require('../controllers/egyediFilmRouteControllers');

const router = express.Router();

router.get('/:id', getEgyediFilm);
router.delete('/', deleteEgyediFilm);

module.exports = router;
