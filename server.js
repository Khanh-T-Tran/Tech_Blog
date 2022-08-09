const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const routes = require('./controllers/homepageController');
const hbs = exphbs.create({});

const app = express();

// Template Engine Setup
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const PORT = process.env.PORT || 3001;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('App start'));
});