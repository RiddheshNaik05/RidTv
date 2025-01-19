const APPLICATIONS_ROUTES = {
  HOME: "HOME",
  MOVIES: `MOVIES`,
  MOVIES_DETAILS: `MOVIES_DETAILS`,
  TV_SHOWS: "TV_SHOWS",
  TV_SHOW_DETAILS: "TV_SHOW_DETAILS",
};

const APPLICATION_ROUTES_URLS = {
  [APPLICATIONS_ROUTES.HOME]: `/`,
  [APPLICATIONS_ROUTES.MOVIES]: `/movies`,
  [APPLICATIONS_ROUTES.MOVIES_DETAILS]: `/movies/:id`,
  [APPLICATIONS_ROUTES.TV_SHOWS]: `/tv-shows`,
  [APPLICATIONS_ROUTES.TV_SHOW_DETAILS]: `/tv-shows/:id`,
};

export default APPLICATION_ROUTES_URLS;

export { APPLICATIONS_ROUTES };
