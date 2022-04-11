import axios from 'axios';
import { getToken } from '../utils/authHelper';
import { API_URL } from '../config/constants';

const accessToken = getToken();

const authAxios = axios.create({
  baseURL: API_URL,
  headers: {
    access_token: `Bearer ${accessToken}`,
  },
});

// authAxios.interceptors.response.use(
//   (response) => {

//     if(response.data.msg === 'Expired token')
//     {
//       deleteToken();
//       window.location.href = '/login';
//     }

//     return response;
//   },
//   (error) => {
//     if(error.response.status === 500)
//     {
//       if(error.response !== undefined)
//       {
//         if(error.response.data.code === 403)
//         {
//           deleteToken();
//           window.location.href = '/login';
//         }
//       }
//     }
// });

export default authAxios;
