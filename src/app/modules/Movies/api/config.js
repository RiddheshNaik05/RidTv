export const ApiUrls = {
  ALL_MOVIES_URL: (pageNo) => `/movie/popular?language=en-US&page=${pageNo}`,
  MOVIE_DETAILS_URL: (movieId) => `/movie/${movieId}?language=en-US`,
  MOVIE_CREDITS_URL: (movieId) => `/movie/${movieId}/credits`,
};
