const express = require('express');
const exphbs = require('express-handlebars');

const hbs = exphbs.create({});

const app = express();

// Template Engine Setup
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

const PORT = process.env.PORT || 3001;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.listen(PORT, () => console.log('app start'));