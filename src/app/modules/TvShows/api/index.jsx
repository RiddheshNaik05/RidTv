import { get } from "../../../Integrations/ApiService/helpers";
import { ApiUrls } from "./config";

const TvShowDetailsService = {
  getAllTvShows: async (pageNo) => {
    try {
      const res = await get(ApiUrls.ALL_TV_SHOWS_URL(pageNo));
      return res;
    } catch (error) {
      console.error(`Fetching what's popular failed: ${error.message}`);
      return error;
    }
  },

  getTvShowDetails: async (id) => {
    try {
      const res = await get(ApiUrls.TV_SHOW_DETAILS_URL(id));
      return res;
    } catch (error) {
      console.error(`Fetching movie failed: ${error.message}`);
      return error;
    }
  },

  getTvShowCredits: async (id) => {
    try {
      const res = await get(ApiUrls.TV_SHOW_CREDITS_URL(id));
      return res;
    } catch (error) {
      console.error(`Fetching credits failed: ${error.message}`);
      return error;
    }
  },
};

export default TvShowDetailsService;
