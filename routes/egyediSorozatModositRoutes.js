const express = require('express');
const {
    getEgyediSorozatModosit,
    updateEgyediSorozatModosit,
} = require('../controllers/egyediSorozatModositRouteControllers');

const router = express.Router();

router.get('/:id', getEgyediSorozatModosit);
router.put('/', updateEgyediSorozatModosit);

module.exports = router;
