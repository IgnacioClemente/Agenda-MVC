const express = require("express");
const contactController = require('../controllers/contactController')

const contactRoute = express.Router();

contactRoute.get('/contact', contactController.contactViewController)

module.exports = contactRoute;