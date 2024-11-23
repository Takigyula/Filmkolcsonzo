const express = require('express');
const { postLogin } = require('../controllers/loginRouteControllers');

const router = express.Router();

router.post('/', postLogin);

module.exports = router;
