import {USER} from '../config/constants';

export const getUserInformation = () => {
  if (sessionStorage.getItem(USER)) {
    const user = JSON.parse(sessionStorage.getItem(USER));
    return user;
  }

  return {
    id: null,
    name: '',
    last_name: '',
    email: '',
    email_verified_at: null,
    phone: '',
    image: '',
    status: '',
    company: '',
    occupation: '',
    country: '',
    created_at: '',
    updated_at: '',
  };
};
