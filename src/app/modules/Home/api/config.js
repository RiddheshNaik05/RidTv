export const ApiUrls = {
  TRENDING_ALL_URL: `/trending/all/day?language=en-US`,
  NOW_PLAYING_MOVIES_URL: `/movie/now_playing?language=en-US&page=1`,
  WHATS_POPULAR: (type) => `/${type}/popular?language=en-US&page=1`,
  TOP_RATED: (type) => `/${type}/top_rated?language=en-US&page=1`,
};
