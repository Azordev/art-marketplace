import authAxios from "../config/authAxios";
import { STATUS_OK } from "../config/constants";
import response from "../config/network/response";
import { getCategoriasAsync } from "./categoriasActions";
import { getMarcasAsync } from "./marcasActions";

export const getProductoByIdAsync = async (idProducto, resolve) => {
  try {
    if (!idProducto) {
      console.error("no product");
      resolve(null);
    }

    console.log("Start request to db");
    const res = await authAxios.get(`/product/${idProducto}`);

    console.log("response from db", res);
    if (res.data.status === STATUS_OK) {
      resolve(res.data.body);
    } else {
      resolve(null);
    }
  } catch (error) {
    resolve(null);
  }
};

export const getDataFichaProducto = async (idProducto, resolve) => {
  try {
    const res = await Promise.all([
      getCategoriasAsync(),
      getMarcasAsync(),
      getProductoByIdAsync(idProducto, resolve),
    ]);

    return {
      plato: res[2] ? res[2] : {},
      marcas: res[1],
      categorias: res[0],
    };
  } catch (error) {
    console.log(error);
    response.error(null, "Opps... hubo un error inesperado");
    return null;
  }
};

export const getProductsAsync = async () => {
  try {
    const res = await authAxios.get(`/product`);

    if (res.data.status === STATUS_OK) {
      return res.data.body.data;
    } else {
      return response.error(null, res.data.message);
    }
  } catch (error) {
    return response.error(error);
  }
};

export const getLatestProducts = async (resolve) => {
  try {
    const res = await authAxios.get(`/product`);

    if (res.data.status === STATUS_OK) {
      resolve(res.data.body.data.reverse().slice(0, 5));
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
    const res = await authAxios.get(`/product`);

    if (res.data.status === STATUS_OK) {
      resolve(
        res.data.body.data
          .filter((product) => product.categories.section_id === "2")
          .slice(0, 5)
      );
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
    const res = await authAxios.get(`/product`);

    if (res.data.status === STATUS_OK) {
      resolve(
        res.data.body.data
          .filter((product) => product.categories.section_id === "1")
          .slice(0, 5)
      );
    } else {
      response.error(null, res.data.message);
      resolve([]);
    }
  } catch (error) {
    response.error(error);
    resolve([]);
  }
};
