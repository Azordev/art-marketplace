import axios from "axios";
import authAxios from "../config/authAxios";
import { API_URL, HOST_URL } from "../config/constants";
import { removeHeaders } from "../config/network/authToken";
import { deleteInfo, getToken, setInfo } from "../utils/authHelper";
import deleteEmptyFields from "../utils/deleteEmptyFields";

/**
 *
 * @param {{email: String, password: String}} data
 * @returns
 */
export const login = async (data) => {
  try {
    const res = await authAxios.post("/customer/login", data);

    if (res.status === 200) {
      if (res.data.body.user.id) {
        const user = res.data.body.user;
        const token = res.data.body.access_token;
        setInfo(token, user);

        return { status: true, message: "Inicio de sesión exitoso" };
      }
    }
  } catch (error) {
    if (error.response.status === 401) {
      return { status: false, message: "Usuario o contraseña incorrectos" };
    }

    return { status: false, message: "Error al iniciar sesión" };
  }
};

export const logout = () => {
  return async () => {
    removeHeaders();
    deleteInfo();
  };
};

export const register = async (data) => {
  try {
    // Patching the weird backend error that doesn't allow empty strings
    deleteEmptyFields(data);

    // I didn't use authAxios because this request has multipart/form-data
    // We could create a new axios instance for this
    await axios.post(API_URL + "/customer", data, {
      headers: { "content-type": "multipart/form-data" },
    });

    return { status: true, message: "Usuario registrado exitosamente" };
  } catch (error) {
    // TODO: Improve error handling when the backend allows it
    return { status: false, message: "Error en el servidor al registrarse" };
  }
};

export const updateUser = async (id, data) => {
  try {
    // Patching the weird backend error that doesn't allow empty strings
    deleteEmptyFields(data);

    // Even though authAxios exists, we use axios because this request has a different base URL
    // And a different content-type (multipart/form-data)
    await axios.post(`${HOST_URL}/api/customer/${id}`, data, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        "content-type": "multipart/form-data",
      },
    });

    // Can't use authAxios because it has a different URL
    const res = await axios.get(`${HOST_URL}/api/customer/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    setInfo(getToken(), res.data.body);

    return { status: true, message: "Usuario actualizado exitosamente" };
  } catch (error) {
    // TODO: Improve error handling when the backend allows it
    return { status: false, message: "Error en el servidor al actualizar" };
  }
};
