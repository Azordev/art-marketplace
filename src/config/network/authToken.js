import authAxios from '../authAxios';

export const applyHeaders = (accessToken) => {
  authAxios.defaults.headers['access_token'] = `Bearer ${accessToken.replace(
      /['"]+/g,
      '',
  )}`;
};

export const removeHeaders = () => {
  delete authAxios.defaults.headers['access_token'];
};
