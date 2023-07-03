const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const {
  trending,
  upcoming,
  topRated,
  movieById,
} = require('./routes/movies.router');

const app = express();

app.use(cors());

app.use(morgan('combined'));

app.use(express.json());

app.use('/', trending);

app.use('/', upcoming);

app.use('/', topRated);

app.use('/', movieById);

module.exports = app;
