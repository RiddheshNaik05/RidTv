import { ApiUrls } from "./config";
import { get } from "../../../Integrations/ApiService/helpers";

const HomeService = {
  getTrendingAll: async () => {
    try {
      const res = await get(ApiUrls.TRENDING_ALL_URL);
      return res;
    } catch (error) {
      console.error(`Fetching trending failed: ${error.message}`);
      return error;
    }
  },

  getNowPlayingMovies: async () => {
    try {
      const res = await get(ApiUrls.NOW_PLAYING_MOVIES_URL);
      return res;
    } catch (error) {
      console.error(`Fetching now playing movies failed: ${error.message}`);
      return error;
    }
  },

  getWhatsPopular: async (type) => {
    try {
      const res = await get(ApiUrls.WHATS_POPULAR(type));
      return res;
    } catch (error) {
      console.error(`Fetching what's popular failed: ${error.message}`);
      return error;
    }
  },

  getTopRated: async (type) => {
    try {
      const res = await get(ApiUrls.TOP_RATED(type));
      return res;
    } catch (error) {
      console.error(`Fetching top rated failed: ${error.message}`);
      return error;
    }
  },
};

export default HomeService;
