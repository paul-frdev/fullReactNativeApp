const {
  httpTrendingMovies,
  httpUpcomingMovies,
  httpTopRatedMovies,
  httpMovieDetails,
} = require('./movies.controller');
const expressRoute = require('express');

const trending = expressRoute.Router();
const upcoming = expressRoute.Router();
const topRated = expressRoute.Router();
const movieById = expressRoute.Router();

trending.get('/trending', httpTrendingMovies);

upcoming.get('/upcoming', httpUpcomingMovies);
topRated.get('/top-rated', httpTopRatedMovies);
movieById.get('/movie/:id', httpMovieDetails);

export = {
  trending,
  upcoming,
  topRated,
  movieById,
};
