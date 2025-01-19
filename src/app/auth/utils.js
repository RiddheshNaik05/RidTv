import { AUTH_TOKENS_KEY_MAP } from "./constants";

const { ACCESS_TOKEN, REFRESH_TOKEN } = AUTH_TOKENS_KEY_MAP;

export const getAuthToken = () => {
  try {
    const sessionID = sessionStorage.getItem(ACCESS_TOKEN);
    return sessionID;
  } catch (error) {
    // logger.error(`Auth token not found ....`);
    return;
  }
};

export const setAuthToken = (accessTokenId, refreshTokenId) => {
  sessionStorage.setItem(ACCESS_TOKEN, accessTokenId);
  sessionStorage.setItem(REFRESH_TOKEN, refreshTokenId);
};

export const checkIfUserIsAuthenticated = () => (getAuthToken() ? true : false);

export const cleanUpAuth = () => {
  sessionStorage.removeItem(ACCESS_TOKEN);
  sessionStorage.removeItem(REFRESH_TOKEN);
};
