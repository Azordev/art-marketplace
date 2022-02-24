import authAxios from "../config/authAxios";
import { STATUS_OK } from "../config/constants";

export const getMarcaById = async (id) => {
  try {
    const res = await authAxios.get(`/artworks/?type=${id}`);

    if (res.data.status === STATUS_OK) {
      return res.data.body;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

const types = [
  "Amulets",
  "Apparatus",
  "Arms and Armor",
  "Basketry",
  "Book Binding",
  "Bound Volume",
  "Calligraphy",
  "Carpet",
  "Ceramic",
  "Coins",
  "Cosmetic Objects",
  "Drawing",
  "Embroidery",
  "Enamel",
  "Forgery",
  "Frame",
  "Funerary Equipment",
  "Furniture and woodwork",
  "Garment",
  "Glass",
  "Glyptic",
  "Illumination",
  "Implements",
  "Inlays",
  "Ivory",
  "Jade",
  "Jewelry",
  "Knitting",
  "Lace",
  "Lacquer",
  "Leather",
  "Linoleum Block",
  "Lithographic Stone",
  "Manuscript",
  "Metalwork",
  "Miniature",
  "Miscellaneous",
  "Mixed Media",
  "Monotype",
  "Mosaic",
  "Musical Instrument",
  "Netsuke",
  "Painting",
  "Papyri",
  "Photograph",
  "Plaque",
  "Plate",
  "Portfolio",
  "Portrait Miniature",
  "Print",
  "Relief",
  "Rock crystal",
  "Rubbing",
  "Sampler",
  "Scarabs",
  "Sculpture",
  "Seals",
  "Silver",
  "Spindle Whorl",
  "Stencil",
  "Stone",
  "Tapestry",
  "Textile",
  "Time-based Media",
  "Tool",
  "Velvet",
  "Vessels",
  "Wood",
  "Woodblock",
];

export const getMarcas = async () => types;
