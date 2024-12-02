const express = require('express');
const {homeViewController,saludoViewController}= require('../controllers/homeController');
const homeRoutes = express.Router();

homeRoutes.get('/', homeViewController);
homeRoutes.get('/home', saludoViewController);

module.exports = homeRoutes;