const express = require('express');
const {
    getEgyediSorozat,
    deleteEgyediSorozat,
} = require('../controllers/egyediSorozatRouteControllers');

const router = express.Router();

router.get('/:id', getEgyediSorozat);
router.delete('/', deleteEgyediSorozat);

module.exports = router;
