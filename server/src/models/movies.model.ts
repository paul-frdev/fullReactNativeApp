import { BASE_URL } from '../constants';

const axios = require('axios');

async function trendingMovies() {
  // @ts-ignore
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${process.env.API_KEY}`
  );

  return response.data;
}

async function getUpcomingMovies() {
  // @ts-ignore
  const response = await axios.get(
    `${BASE_URL}/movie/upcoming?api_key=${process.env.API_KEY}`
  );

  return response.data;
}

async function getTopRatedMovies() {
  // @ts-ignore
  const response = await axios.get(
    `${BASE_URL}/movie/top_rated?api_key=${process.env.API_KEY}`
  );

  return response.data;
}

async function getMovieDetails(id: number) {
  // @ts-ignore
  const response = await axios.get(
    `${BASE_URL}/movie/${id}?api_key=${process.env.API_KEY}`
  );

  return response.data;
}

export = { trendingMovies, getUpcomingMovies, getTopRatedMovies, getMovieDetails };
