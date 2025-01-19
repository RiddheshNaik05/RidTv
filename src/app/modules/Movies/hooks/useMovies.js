import { useEffect, useState } from "react";
import MovieDetailsService from "../api";

const useMovies = () => {
  const [moviesList, setMoviesList] = useState(null);
  const [isMoviesListLoading, setIsMoviesListLoading] = useState(false);

  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllMoviesApi(page);
  }, [page]);

  const getAllMoviesApi = async (pageNo) => {
    setIsMoviesListLoading(true);
    try {
      setIsMoviesListLoading(false);
      const response = await MovieDetailsService.getAllMovies(pageNo);
      setMoviesList(response?.data);
    } catch (error) {
      setIsMoviesListLoading(false);
      //   showToastNotification("Fetching Movies failed", "error");
      return error;
    }
  };

  return {
    moviesList,
    isMoviesListLoading,
    page,
    setPage,
  };
};

export default useMovies;
