const express = require('express');
const {
    getEgyediFilmModosit,
    postEgyediFilmModosit,
} = require('../controllers/egyediFilmModositRouteControllers');

const router = express.Router();

router.get('/:id', getEgyediFilmModosit);
router.post('/', postEgyediFilmModosit);

module.exports = router;
