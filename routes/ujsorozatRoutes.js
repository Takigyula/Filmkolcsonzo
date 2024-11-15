const express = require('express');
const {
    getUjSorozat,
    postUjSorozat,
} = require('../controllers/ujsorozatRouteController');

const router = express.Router();

router.get('/', getUjSorozat);
router.post('/', postUjSorozat);

module.exports = router;
