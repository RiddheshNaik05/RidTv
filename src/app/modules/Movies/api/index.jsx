import { get } from "../../../Integrations/ApiService/helpers";
import { ApiUrls } from "./config";

const MovieDetailsService = {
  getAllMovies: async (pageNo) => {
    try {
      const res = await get(ApiUrls.ALL_MOVIES_URL(pageNo));
      return res;
    } catch (error) {
      console.error(`Fetching what's popular failed: ${error.message}`);
      return error;
    }
  },

  getMovieDetails: async (id) => {
    try {
      const res = await get(ApiUrls.MOVIE_DETAILS_URL(id));
      return res;
    } catch (error) {
      console.error(`Fetching movie failed: ${error.message}`);
      return error;
    }
  },

  getMovieCredits: async (id) => {
    try {
      const res = await get(ApiUrls.MOVIE_CREDITS_URL(id));
      return res;
    } catch (error) {
      console.error(`Fetching credits failed: ${error.message}`);
      return error;
    }
  },
};

export default MovieDetailsService;
