const express = require('express');
const {
    getNezok,
} = require('../controllers/nezokFrontRouteControllers');

const router = express.Router();

router.get('/', getNezok);
// router.delete('/:id', deleteNezo);

module.exports = router;