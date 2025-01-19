import { useEffect, useState } from "react";
import HomeService from "../api";

const useHome = (popularType, topRatedType) => {
  const [trendingAll, setTrendingAll] = useState(null);
  const [isTrendingAllLoading, setIsTrendingAllLoading] = useState(false);

  const [nowPlaying, setNowPlaying] = useState(null);

  const [whatsPopular, setWhatsPopular] = useState(null);
  const [isWhatsPopularLoading, setIsWhatsPopularLoading] = useState(false);

  const [topRated, setTopRated] = useState(null);
  const [isTopRatedLoading, setIsTopRatedLoading] = useState(false);

  useEffect(() => {
    getTrendingAllApi();
    getNowPlayingMoviesApi();
  }, []);

  useEffect(() => {
    getWhatsPopularApi(popularType === "Movies" ? "movie" : "tv");
  }, [popularType]);

  useEffect(() => {
    getTopRatedApi(topRatedType === "Movies" ? "movie" : "tv");
  }, [topRatedType]);

  const getTrendingAllApi = async () => {
    setIsTrendingAllLoading(true);
    try {
      const response = await HomeService.getTrendingAll();
      setTrendingAll(response?.data);
      setIsTrendingAllLoading(false);
    } catch (error) {
      setIsTrendingAllLoading(false);
      //   showToastNotification("Fetching Notifications Details failed", "error");
      return error;
    }
  };

  const getNowPlayingMoviesApi = async () => {
    try {
      const response = await HomeService.getNowPlayingMovies();
      setNowPlaying(response?.data);
    } catch (error) {
      //   showToastNotification("Fetching Notifications Details failed", "error");
      return error;
    }
  };

  const getWhatsPopularApi = async (type) => {
    setIsWhatsPopularLoading(true);
    try {
      const response = await HomeService.getWhatsPopular(type);
      setWhatsPopular(response?.data);
      setIsWhatsPopularLoading(false);
    } catch (error) {
      setIsWhatsPopularLoading(false);
      //   showToastNotification("Fetching Notifications Details failed", "error");
      return error;
    }
  };

  const getTopRatedApi = async (type) => {
    setIsTopRatedLoading(true);
    try {
      setIsTopRatedLoading(false);
      const response = await HomeService.getTopRated(type);
      setTopRated(response?.data);
    } catch (error) {
      setIsTopRatedLoading(false);
      //   showToastNotification("Fetching Notifications Details failed", "error");
      return error;
    }
  };

  return {
    trendingAll,
    isTrendingAllLoading,
    nowPlaying,
    whatsPopular,
    isWhatsPopularLoading,
    topRated,
    isTopRatedLoading,
  };
};

export default useHome;
