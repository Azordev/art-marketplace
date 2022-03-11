/**
 * @param {Array<{category_id: String}>} products
 * @param {String} categoryId
 * @return Returns all products with the category selected
 */
export const filterBySubcategory = (products, subcategoryId) => {
  return products.filter((product) => product.subcategory.id === subcategoryId);
};

/**
 * @param {Array<{category_id: String}>} products
 * @param {String} categoryId
 * @return Returns all products with the category selected
 */
export const filterByCategory = (products, categoryId) => {
  return products.filter((product) => product.category_id === categoryId);
};

/**
 * @param {Array<{name: String, description: String}>} products
 * @param {String} search
 * @return Returns all products with the brand selected
 */
export const filterBySearch = (products, search) => {
  return products.filter(
    ({ name, description }) =>
      name.toLowerCase().includes(search.toLowerCase()) ||
      description.toLowerCase().includes(search.toLowerCase())
  );
};

/**
 * @param {Array<{categories: {section_id: String}}>} products
 * @return Returns all products with the brand selected
 */
export const filterGeneric = (products) => {
  return products.filter((product) => product.categories.section_id === "2");
};

/**
 * @param {Array<{categories: {section_id: String}}>} products
 * @return Returns all products with the brand selected
 */
export const filterManufacturer = (products) => {
  return products.filter((product) => product.categories.section_id === "1");
};
