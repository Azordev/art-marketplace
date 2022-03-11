import authAxios from '../config/authAxios';
import {STATUS_OK} from '../config/constants';
import types from '../utils/types';

export const getArtworksByType = async (department, type) => {
  try {
    const res = await authAxios.get(
        `/artworks/?department=${department}&type=${type}`,
    );

    if (res.data.status === STATUS_OK) {
      return res.data.body;
    }
    return [];
  } catch (error) {
    return [];
  }
};

export const getTypes = async () => types;
