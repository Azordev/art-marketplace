import { removeHeaders } from '../config/network/authToken';
import { deleteInfo, setInfo } from '../utils/authHelper';
import deleteEmptyFields from '../utils/deleteEmptyFields';

/**
 *
 * @param {{email: String, password: String}} data
 * @returns
 */
export const login = async (data) => {
  try {
    setInfo('mocked-token', data);

    return { status: true, message: 'Inicio de sesión exitoso' };
  } catch (error) {
    // TODO: Improve error handling when the backend allows it
    return { status: false, message: 'Error al iniciar sesión' };
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

    return { status: true, message: 'Usuario registrado exitosamente' };
  } catch (error) {
    // TODO: Improve error handling when the backend allows it
    return { status: false, message: 'Error en el servidor al registrarse' };
  }
};

export const updateUser = async (id, data) => {
  try {
    // Patching the weird backend error that doesn't allow empty strings
    deleteEmptyFields(data);

    return { status: true, message: 'Usuario actualizado exitosamente' };
  } catch (error) {
    // TODO: Improve error handling when the backend allows it
    return { status: false, message: 'Error en el servidor al actualizar' };
  }
};
