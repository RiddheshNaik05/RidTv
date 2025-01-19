export const ApiUrls = {
  ALL_TV_SHOWS_URL: (pageNo) => `/tv/popular?language=en-US&page=${pageNo}`,
  TV_SHOW_DETAILS_URL: (tvShowId) => `/tv/${tvShowId}?language=en-US`,
  TV_SHOW_CREDITS_URL: (tvShowId) => `/tv/${tvShowId}/credits`,
};
