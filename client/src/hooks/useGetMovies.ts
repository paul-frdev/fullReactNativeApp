import { useCallback, useEffect, useState } from "react";
import { httpGetTopRatedMovies, httpGetTrendingMovies, httpGetUpcomingMovies, httpGetMovieById } from "./requests";
import { IMovie } from "@/types/movies";

const useGetMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState<IMovie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<IMovie[]>([]);
  const [movieById, setMovieById] = useState<any>(null);
  const [topRated, setTopRated] = useState<IMovie[]>([]);
  const [loading, setIsLoading] = useState(false);

  const getTrendingMovies = useCallback(async () => {
    setIsLoading(true);
    const fetchTrendingMovies = await httpGetTrendingMovies();

    if (fetchTrendingMovies && fetchTrendingMovies.results) {
      setTrendingMovies(fetchTrendingMovies.results);
      setIsLoading(false);
    }
  }, []);

  const getUpcomingMovies = useCallback(async () => {
    setIsLoading(true);
    const fetchUpcomingMovies = await httpGetUpcomingMovies();

    if (fetchUpcomingMovies && fetchUpcomingMovies.results) {
      setUpcomingMovies(fetchUpcomingMovies.results);
      setIsLoading(false);
    }
  }, []);

  const getTopRatedMovies = useCallback(async () => {
    setIsLoading(true);
    const fetchTopRatedMovies = await httpGetTopRatedMovies();

    if (fetchTopRatedMovies && fetchTopRatedMovies.results) {
      setTopRated(fetchTopRatedMovies.results);
      setIsLoading(false);
    }
  }, []);

  const getMovieById = useCallback(async (id: number) => {
    setIsLoading(true);
    const fetchMovieById = await httpGetMovieById(id);
    console.log(fetchMovieById);

    if (fetchMovieById) {
      setIsLoading(false);
      setMovieById(fetchMovieById);
    }
  }, []);

  useEffect(() => {
    getTrendingMovies();
    getUpcomingMovies();
    getTopRatedMovies();
  }, [getTrendingMovies, getUpcomingMovies, getTopRatedMovies]);

  return {
    getMovieById,
    trendingMovies,
    upcomingMovies,
    topRated,
    movieById,
    loading,
  };
};

export default useGetMovies;
