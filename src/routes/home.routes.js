const express = require('express');
const {homeViewController,saludoViewController, logoutController}= require('../controllers/homeController');
const homeRoutes = express.Router();

homeRoutes.get('/', homeViewController);
homeRoutes.get('/logout', logoutController);
homeRoutes.get('/home', saludoViewController);

module.exports = homeRoutes;