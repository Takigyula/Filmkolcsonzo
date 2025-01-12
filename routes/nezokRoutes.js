const express = require('express');
const {
    getNezok,
    deleteNezo,
} = require('../controllers/nezokRouteControllers');

const router = express.Router();

router.get('/', getNezok);
router.delete('/:id', deleteNezo);

module.exports = router;
