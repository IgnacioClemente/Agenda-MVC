const express = require('express');
const homeController = require('../controllers/homeController');
const homeRoutes = express.Router();

homeRoutes.get('/', homeController.homeViewController);
homeRoutes.get('/home', homeController.saludoViewController);

module.exports = homeRoutes;