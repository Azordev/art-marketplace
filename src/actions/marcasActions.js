import authAxios from "../config/authAxios";
import { STATUS_OK } from "../config/constants";
import response from "../config/network/response";

export const getMarcaById = async (id) => {
  try {
    const res = await authAxios.get(`/brand/${id}`);

    if (res.data.status === STATUS_OK) {
      return res.data.body;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export const getMarcas = async () => {
  try {
    const res = await authAxios.get("/brand");

    if (res.data.status === STATUS_OK) {
      return res.data.body.data;
    } else {
      return false;
    }
  } catch (error) {
    response.error(error);
    return false;
  }
};

export const getMarcasAsync = async (resolve) => {
  try {
    const res = await authAxios.get("/brand");

    if (res.data.status === STATUS_OK) {
      resolve(res.data.body.data);
    } else {
      resolve(false);
    }
  } catch (error) {
    resolve(false);
  }
};
