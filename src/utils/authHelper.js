import {TOKEN_NAME, USER} from '../config/constants';

export const getToken = () => {
  return JSON.parse(sessionStorage.getItem(TOKEN_NAME));
};

export const setInfo = (token, userData) => {
  sessionStorage.setItem(TOKEN_NAME, JSON.stringify(token));
  sessionStorage.setItem(USER, JSON.stringify(userData));
};

export const deleteInfo = () => {
  sessionStorage.removeItem(TOKEN_NAME);
};
