const express = require('express');
const path = require('path');
const homeRoutes = require('./src/routes/home.routes');
const contactRoute = require('./src/routes/contact.routes');
var expressEjsLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;
const public = path.join(__dirname, 'public');

app.use('/public', express.static(public));

app.set('view engine', 'ejs');
app.use(expressEjsLayouts);

app.set('views', path.join(__dirname, 'src/views'));
app.set('layout', path.join(__dirname, 'src/views/shared/layout'));

app.use('/', homeRoutes);
app.use('/contact', contactRoute);

app.listen(port, () =>{
    console.log(`Servidor corriendo en el puerto: ${port}`);
})