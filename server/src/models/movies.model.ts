import { BASE_URL } from '../constants';

const axios = require('axios');

async function trendingMovies() {
  // @ts-ignore
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?api_key=${process.env.API_KEY}`
  );

  return response.data
}

// async function loadTrendingMovies() {
//  return await trendingMovies();
// }

module.exports = { trendingMovies };
