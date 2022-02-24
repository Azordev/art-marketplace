import authAxios from "../config/authAxios";
import { STATUS_OK } from "../config/constants";

export const getCategoryById = async (id) => {
  try {
    const res = await authAxios.get(`/artworks/?department=${id}`);

    if (res.status === STATUS_OK) {
      return res.data.data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

const categories = [
  "African Art",
  "American Painting and Sculpture",
  "Art of the Americas",
  "Chinese Art",
  "Contemporary Art",
  "Decorative Art and Design",
  "Drawings",
  "Egyptian and Ancient Near Eastern Art",
  "European Painting and Sculpture",
  "Greek and Roman Art",
  "Indian and South East Asian Art",
  "Islamic Art",
  "Japanese Art",
  "Korean Art",
  "Medieval Art",
  "Modern European Painting and Sculpture",
  "Oceania",
  "Performing Arts, Music, & Film",
  "Photography",
  "Prints",
  "Textiles",
];

export const getCategories = async () => categories;
