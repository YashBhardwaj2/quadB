const express = require('express');
const axios = require('axios');

const router = express.Router();
const homeController = require('../controllers/home_controller')

router.get('/',homeController.home);


module.exports = router;