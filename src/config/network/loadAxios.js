import { Loading } from "notiflix";
import authAxios from "../authAxios";

export default async function loadAxios({ url, body, method }) {
  
  Loading.pulse();

  if (method === '') {
    Loading.remove();
    console.log('Falta especificar método.')
  }

  try {
    let response = null;
    switch (method) {
      case 'POST':
        response = await authAxios.post(url, body);
        break;
      case 'GET': 
        response = await authAxios.get(url);
        break;
      case 'PUT':
        response = await authAxios.put(url, body);
        break;
      case 'DELETE':
        response = await authAxios.delete(url);
        break;
      default:
        return null
    }
    
    Loading.remove();
    return response;

  } catch (error) {
    Loading.remove();
    return error;
  }
}