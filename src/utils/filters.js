/**
 * @param {Array<{category_id: String}>} products
 * @param {String} categoryId
 * @returns Returns all products with the category selected
 */
export const filterBySubcategory = (products, subcategoryId) => {
  return products.filter((product) => product.subcategory.id === subcategoryId);
};

/**
 * @param {Array<{department: String}>} products
 * @param {String} department
 * @returns Returns all products with the category selected
 */
export const filterByDepartment = (products, department) => {
  return products.filter((product) => product.department === department);
};

/**
 * @param {Array<{name: String, description: String}>} products
 * @param {String} search
 * @returns Returns all products with the brand selected
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
 * @returns Returns all products with the brand selected
 */
export const filterByType = (products, type) => {
  return products.filter((product) => product.type === type);
};

/**
 * @param {Array<{categories: {section_id: String}}>} products
 * @returns Returns all products with the brand selected
 */
export const filterManufacturer = (products) => {
  return products.filter((product) => product.categories.section_id === "1");
};
