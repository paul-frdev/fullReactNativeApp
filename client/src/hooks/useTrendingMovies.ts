import { useCallback, useEffect, useState } from "react";
import { httpGetTrendingMovies } from "./requests";

const useTrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState<any>([]);
  const [loading, setIsLoading] = useState(true);

  const getTrendingMovies = useCallback(async () => {
    const fetchTrendingMovies = await httpGetTrendingMovies();

    setTrendingMovies(fetchTrendingMovies);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    getTrendingMovies();
  }, [getTrendingMovies]);

  return {
    trendingMovies,
    loading
  };
};

export default useTrendingMovies;
