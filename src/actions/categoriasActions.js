import authAxios from "../config/authAxios";
import { STATUS_OK } from "../config/constants";
import response from "../config/network/response";

export const getCategoryById = async (id) => {
  try {
    const res = await authAxios.get(`/category/${id}`);

    if (res.data.status === STATUS_OK) {
      return res.data.body;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export const getCategories = async () => {
  try {
    const res = await authAxios.get("/category");

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

export const getCategoriasAsync = async (resolve) => {
  try {
    const res = await authAxios.get("/category");

    if (res.data.status === STATUS_OK) {
      resolve(res.data.body.data);
    } else {
      resolve(false);
    }
  } catch (error) {
    resolve(false);
  }
};
