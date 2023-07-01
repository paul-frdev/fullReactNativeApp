const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const trending = require('./routes/movies.router');

const app = express();

app.use(cors());

app.use(morgan('combined'));

app.use(express.json());


app.use('/', trending);

module.exports = app;
