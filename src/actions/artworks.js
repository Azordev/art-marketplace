import authAxios from '../config/authAxios';
import {STATUS_OK} from '../config/constants';
import response from '../config/network/response';

export const getArtworkById = async (id, callback) => {
  try {
    if (!id) {
      callback([]);
    }

    const res = await authAxios.get(`/artworks/${id}`);
    if (res.status === STATUS_OK) {
      callback(res.data?.data || []);
    } else {
      response.error('Status not ok');
      callback([]);
    }
  } catch (error) {
    response.error(error);
    callback([]);
  }
};

export const getArtworks = async () => {
  try {
    const res = await authAxios.get(`/artworks?has_image=1&limit=25`);
    if (res.status === STATUS_OK) {
      return res.data?.data || [];
    } else {
      return [];
    }
  } catch (error) {
    response.error(error);
    return [];
  }
};

export const getArtworksQuery = async (query) => {
  try {
    const res = await authAxios.get(`/artworks?${query}`);
    if (res.status === STATUS_OK) {
      return res.data?.data || [];
    } else {
      return [];
    }
  } catch (error) {
    response.error(error);
    return [];
  }
};

export const getLatestArtworks = async (callback) => {
  try {
    const res = await authAxios.get(
        `/artworks?recently_acquired=true&limit=5&has_image=1`,
    );

    if (res.status === STATUS_OK) {
      callback(res.data.data);
    } else {
      response.error(null, res.data?.message || 'getLatestArtworks::Error');
      callback([]);
    }
  } catch (error) {
    response.error(error);
    callback([]);
  }
};

export const getFemaleArtistArtworks = async (callback) => {
  try {
    const res = await authAxios.get(
        `/artworks?female_artists=true&limit=5&has_image=1`,
    );

    if (res.status === STATUS_OK) {
      callback(res.data.data);
    } else {
      response.error(
          null,
          res.data?.message || 'getFemaleArtistArtworks::Error',
      );
      callback([]);
    }
  } catch (error) {
    response.error(error);
    callback([]);
  }
};

export const getOnViewArtworks = async (callback) => {
  try {
    const res = await authAxios.get(
        `/artworks?currently_on_view=true&limit=5&has_image=1`,
    );

    if (res.status === STATUS_OK) {
      callback(res.data.data);
    } else {
      response.error(null, res.data.message);
      callback([]);
    }
  } catch (error) {
    response.error(error);
    callback([]);
  }
};
