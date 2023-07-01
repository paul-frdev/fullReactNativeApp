import { httpTrendingMovies } from './movies.controller';
const express = require('express');

const trendingMovies = express.Router();

trendingMovies.get('/trending', httpTrendingMovies);

module.exports = trendingMovies;

