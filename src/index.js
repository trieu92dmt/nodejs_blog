const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const route = require('./routes')
const app = express();
const port = 3000;

// Get instance express handlebars
// Config handlebars
const handlebars = exphbs.create({
  extname: '.hbs'
});

// Get static file
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Template engine
app.engine('hbs', handlebars.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'))

// Route

route(app);

//
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});