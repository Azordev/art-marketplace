import { TOKEN_NAME } from "../config/constants";

export const getToken = () => {
  return sessionStorage.getItem(TOKEN_NAME);
};
