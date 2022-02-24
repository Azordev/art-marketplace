export const TOKEN_NAME = "jwt-tk";
export const USER = "user";

export const API_URL = process.env.REACT_APP_API_URL;
export const HOST_URL = process.env.REACT_APP_HOST_URL;
export const PUBLIC_URL =
  process.env.REACT_APP_HOST_URL +
  (process.env.NODE_ENV !== "production" ? "/public" : "");

//SERVER

export const STATUS_FAIL = 0;
export const STATUS_OK = 1;
