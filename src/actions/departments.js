import authAxios from '../config/authAxios';
import {STATUS_OK} from '../config/constants';
import departments from '../utils/departments';

export const getArtworkByDepartment = async (department) => {
  try {
    const res = await authAxios.get(`/artworks/?department=${department}`);

    if (res.status === STATUS_OK) {
      return res.data.data;
    }
    return null;
  } catch (error) {
    return null;
  }
};

export const getDepartments = () => departments;
