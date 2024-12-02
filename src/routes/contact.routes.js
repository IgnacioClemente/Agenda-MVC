const express = require("express");
const {contactViewController, contactListViewController, deleteContactController, formContactViewController, createContactController} = require('../controllers/contactController');

const contactRoute = express.Router();

contactRoute.get('/', contactListViewController);
contactRoute.post('/', createContactController);
contactRoute.get('/add', formContactViewController);
contactRoute.get('/:id', contactViewController);
contactRoute.get('/delete/:id', deleteContactController);

module.exports = contactRoute;