import { useEffect, useState } from "react";
import TvShowDetailsService from "../api";

const useTvShows = () => {
  const [tvShowsList, setTvShowsList] = useState(null);
  const [isTvShowsListLoading, setIsTvShowsListLoading] = useState(false);

  const [page, setPage] = useState(1);

  useEffect(() => {
    getAllTvShowsApi(page);
  }, [page]);

  const getAllTvShowsApi = async (pageNo) => {
    setIsTvShowsListLoading(true);
    try {
      setIsTvShowsListLoading(false);
      const response = await TvShowDetailsService.getAllTvShows(pageNo);
      setTvShowsList(response?.data);
    } catch (error) {
      setIsTvShowsListLoading(false);
      //   showToastNotification("Fetching TvShows failed", "error");
      return error;
    }
  };

  return {
    tvShowsList,
    isTvShowsListLoading,
    page,
    setPage,
  };
};

export default useTvShows;
