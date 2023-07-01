import { Request, Response } from 'express';
const { trendingMovies } = require('../models/movies.model');

// @ts-ignore
export async function httpTrendingMovies(req: Request, res: Response) {
  const trendingMoviesData = await trendingMovies();
  console.log(typeof trendingMoviesData);

  return res.status(200).json(trendingMoviesData);
}


