import authAxios from "../config/authAxios";
import { STATUS_OK } from "../config/constants";
import response from "../config/network/response";

export const getProductoByIdAsync = async (idProducto, resolve) => {
  try {
    if (!idProducto) {
      console.error("no product");
      resolve(null);
    }

    const res = await authAxios.get(`/artworks/${idProducto}`);

    console.log("response from db", res);
    if (res.status === STATUS_OK) {
      resolve(res.data.data);
    } else {
      resolve(null);
    }
  } catch (error) {
    resolve(null);
  }
};

export const getProductsAsync = async () => {
  try {
    console.log("Start request to db");
    const res = await authAxios.get(`/artworks?true&has_image=1`);

    console.log("response from db", res);
    if (res.status === STATUS_OK) {
      console.log("response from db", res);
      return res.data.data;
    } else {
      response.error(null, res.data.message);
      return [];
    }
  } catch (error) {
    return response.error(error);
  }
};

export const getLatestProducts = async (resolve) => {
  try {
    console.log("Start request to db");
    const res = await authAxios.get(
      `/artworks?recently_acquired=true&limit=5&has_image=1`
    );

    console.log("response from db", res);
    if (res.status === STATUS_OK) {
      console.log("response from db", res);
      resolve(res.data.data);
    } else {
      response.error(null, res.data.message);
      resolve([]);
    }
  } catch (error) {
    response.error(error);
    resolve([]);
  }
};

export const getGenericProducts = async (resolve) => {
  try {
    console.log("Start request to db");
    const res = await authAxios.get(
      `/artworks?female_artists=true&limit=5&has_image=1`
    );

    console.log("response from db", res);
    if (res.status === STATUS_OK) {
      console.log("response from db", res);
      resolve(res.data.data);
    } else {
      response.error(null, res.data.message);
      resolve([]);
    }
  } catch (error) {
    response.error(error);
    resolve([]);
  }
};

export const getManufacturerProducts = async (resolve) => {
  try {
    console.log("Start request to db");
    const res = await authAxios.get(
      `/artworks?currently_on_view=true&limit=5&has_image=1`
    );

    console.log("response from db", res);
    if (res.status === STATUS_OK) {
      console.log("response from db", res);
      resolve(res.data.data);
    } else {
      response.error(null, res.data.message);
      resolve([]);
    }
  } catch (error) {
    response.error(error);
    resolve([]);
  }
};
