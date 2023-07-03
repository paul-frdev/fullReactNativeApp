import { BASE_URL } from "@/constants";

async function httpGetTrendingMovies() {
  const response = await fetch(`${BASE_URL}/trending`);

  return await response.json();
}

async function httpGetUpcomingMovies() {
  const response = await fetch(`${BASE_URL}/upcoming`);

  return await response.json();
}

async function httpGetTopRatedMovies() {
  const response = await fetch(`${BASE_URL}/top-rated`);

  return await response.json();
}

async function httpGetMovieById(id: number) {
  const response = await fetch(`${BASE_URL}/movie/${id}`);

  return await response.json();
}

export { httpGetTrendingMovies, httpGetUpcomingMovies, httpGetTopRatedMovies, httpGetMovieById };
