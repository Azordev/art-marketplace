export const isAuthenticated = () => {
  return !!sessionStorage.getItem('jwt-tk');
};
