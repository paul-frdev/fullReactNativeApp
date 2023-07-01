import { BASE_URL } from "@/constants";

async function httpGetTrendingMovies() {
  const response = await fetch(`${BASE_URL}/trending`);

  return await response.json();
}

export { httpGetTrendingMovies };
