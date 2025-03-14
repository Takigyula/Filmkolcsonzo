const express = require('express');
const {
    updateCsillagModosit,
} = require('../controllers/csillagModositRouteControllers');

const router = express.Router();

router.put('/:id', updateCsillagModosit);

module.exports = router;
