import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { MainNav, Footer } from "../components";
import ProductItem from "../components/ProductItem";
import Filters from "../components/Products/Filters";

import { getProductsAsync } from "../actions/productosActions";
import {
  filterByCategory,
  filterBySearch,
  filterGeneric,
  filterManufacturer,
  filterBySubcategory,
} from "../utils/filters";
import Pagination from "../components/Products/Pagination";
import { getCategories } from "../actions/categoriasActions";

const Products = () => {
  const { search } = useLocation();
  const { push } = useHistory();
  const [products, setProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("none");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const filters = queryString.parse(search);

  const getProductsAndCategories = async () => {
    const data = await getProductsAsync();

    const res = await getCategories();

    if (res) setCategories(res);

    const categoryId = parseInt(filters.category);
    const subcategoryId = parseInt(filters.subcategory);

    if (res && categoryId && !subcategoryId) {
      categoryClicked(
        { preventDefault: () => {} },
        res.find((category) => category.id === categoryId)
      );
      setSelectedFilter("category");
    } else if (subcategoryId) {
      subcategoryClicked({ preventDefault: () => {} }, subcategoryId, res);
      setSelectedFilter("category");
    }

    setProducts(data);
    setCurrentProducts(data);
  };

  const filterAll = async () => {
    if (filters.subcategory) {
      return setCurrentProducts(
        filterBySubcategory(products, filters.subcategory)
      );
    }
    if (filters.category) {
      return setCurrentProducts(filterByCategory(products, filters.category));
    }
    if (filters.q) {
      return setCurrentProducts(filterBySearch(products, filters.q));
    }
    if (selectedFilter === "generic") {
      return setCurrentProducts(filterGeneric(products));
    }
    if (selectedFilter === "manufacturer") {
      return setCurrentProducts(filterManufacturer(products));
    }

    return setCurrentProducts(await getProductsAsync());
  };

  useEffect(() => {
    filterAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [categories, products, search, selectedFilter]);

  useEffect(() => {
    getProductsAndCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const categoryClicked = (e, category) => {
    e.preventDefault();
    setSelectedCategory(category);
    push(`/products?category=${category}`);
  };

  const subcategoryClicked = (e) => {
    e.preventDefault();
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = currentProducts.slice(indexOfFirstPost, indexOfLastPost);

  const paginateFront = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage + 1);
  };
  const paginateBack = (e) => {
    e.preventDefault();
    setCurrentPage(currentPage - 1);
  };

  const paginate = (e, pageNumber) => {
    e.preventDefault();
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <MainNav query={queryString.parse(search).q} />

      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row px-20 pt-5 lg:pt-16 pb-20">
        <Filters
          categoryClicked={categoryClicked}
          categories={categories}
          setFilter={setSelectedFilter}
          currentFilter={selectedFilter}
        />
        <div className="w-full lg:w-4/5 space-y-8">
          {selectedFilter === "none" && (
            <p>
              <b>Pro Tip: </b>Usa un filtro a la izquierda para limitar la
              búsqueda
            </p>
          )}
          {selectedFilter === "generic" && (
            <div
              style={{ backgroundColor: "#11698E" }}
              className="bg-add text-white md:mr-8 lg:mr-20 xl:mr-3 2xl:mr-10"
            >
              <h2 className="text-4xl px-4 py-2 font-bold">Por tipo</h2>
            </div>
          )}
          {selectedFilter === "category" && (
            <div
              style={{ backgroundColor: "#11698E" }}
              className="bg-add text-white md:mr-8 lg:mr-20 xl:mr-3 2xl:mr-10"
            >
              <h2 className="text-4xl px-4 py-2 font-bold">
                Departamento {selectedCategory}
              </h2>
            </div>
          )}
          {selectedFilter === "manufacturer" && (
            <div
              style={{ backgroundColor: "#11698E" }}
              className="bg-add text-white md:mr-8 lg:mr-20 xl:mr-3 2xl:mr-10"
            >
              <h2 className="text-4xl max-w-full block overflow-hidden text-ellipsis px-4 py-2 font-bold">
                Por fecha
              </h2>
            </div>
          )}
          {currentProducts.length === 0 ? (
            <h1 className="text-center">
              No hay productos usando estos argumentos
            </h1>
          ) : (
            <>
              <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 w-full p-0 justify-evenly xl:justify-around">
                {currentPosts.map((product) => (
                  <ProductItem
                    data={product}
                    key={`product-item-${product.id}`}
                  />
                ))}
              </div>

              {currentProducts.length <= 12 || (
                <Pagination
                  postsPerPage={postsPerPage}
                  totalPosts={currentProducts.length}
                  paginate={paginate}
                  currentPage={currentPage}
                  paginateFront={paginateFront}
                  paginateBack={paginateBack}
                />
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Products;
