const express = require("express");
const contactController = require('../controllers/contactController')

const contactRoute = express.Router();

contactRoute.get('/', contactController.contactViewController)
contactRoute.get('/:id', contactController.contactListViewController)

module.exports = contactRoute;