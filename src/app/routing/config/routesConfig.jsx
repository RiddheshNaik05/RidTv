import { lazy } from "react";

import APPLICATION_ROUTES_URLS from "./appsConfig";

//-------------------------------DEFAULT ROUTES-------------------------------//
const Home = lazy((/* webpackChunkName: "ridtv-home" */) =>
  import("../../modules/Home"));

const Movies = lazy((/* webpackChunkName: "ridtv-movies" */) =>
  import("../../modules/Movies"));

const MovieDetails = lazy((/* webpackChunkName: "ridtv-movies-details" */) =>
  import("../../modules/Movies/components/MovieDetails"));

const TvShows = lazy((/* webpackChunkName: "ridtv-tv-show" */) =>
  import("../../modules/TvShows"));

const TvShowDetails = lazy((/* webpackChunkName: "ridtv-tv-show-details" */) =>
  import("../../modules/TvShows/components/TvShowDetails"));

const DEFAULT_ROUTES = [
  {
    path: APPLICATION_ROUTES_URLS.HOME,
    element: <Home />,
  },
  {
    path: APPLICATION_ROUTES_URLS.MOVIES,
    element: <Movies />,
  },
  {
    path: APPLICATION_ROUTES_URLS.MOVIES_DETAILS,
    element: <MovieDetails />,
  },
  {
    path: APPLICATION_ROUTES_URLS.TV_SHOWS,
    element: <TvShows />,
  },
  {
    path: APPLICATION_ROUTES_URLS.TV_SHOW_DETAILS,
    element: <TvShowDetails />,
  },
];

//-------------------------------AUTH ROUTES-------------------------------//

// const AUTH_ROUTES: RouteProps[] = [
//   {
//     path: APPLICATION_ROUTES_URLS.LOGIN,
//     element: <Login />,
//   },
//   {
//     path: APPLICATION_ROUTES_URLS.RESET_PASSWORD,
//     element: <ResetPassword />,
//   },
// ];

export { DEFAULT_ROUTES };
