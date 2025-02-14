const express = require('express');
const { updateNezo } = require('../controllers/nezokStatuszRouteControllers');

const router = express.Router();

router.put('/:id', updateNezo);

module.exports = router;
