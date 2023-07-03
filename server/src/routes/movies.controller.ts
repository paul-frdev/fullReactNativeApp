import { Request, Response } from 'express';
const {
  trendingMovies,
  getUpcomingMovies,
  getTopRatedMovies,
  getMovieDetails,
} = require('../models/movies.model');

// @ts-ignore
async function httpTrendingMovies(req: Request, res: Response) {
  const trendingMoviesData = await trendingMovies();

  return res.status(200).json(trendingMoviesData);
}
// @ts-ignore
async function httpUpcomingMovies(req: Request, res: Response) {
  const upComingMovies = await getUpcomingMovies();

  return res.status(200).json(upComingMovies);
}
// @ts-ignore
async function httpTopRatedMovies(req: Request, res: Response) {
  const topRatedMovies = await getTopRatedMovies();

  return res.status(200).json(topRatedMovies);
}

// @ts-ignore
async function httpMovieDetails(req: Request, res: Response) {
  const id = +req.body.id;
  const movieDetails = await getMovieDetails(id);

  return res.status(200).json(movieDetails);
}

export = {
  httpTrendingMovies,
  httpUpcomingMovies,
  httpTopRatedMovies,
  httpMovieDetails,
};
