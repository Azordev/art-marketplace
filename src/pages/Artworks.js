import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { MainNav, Footer } from "../components";
import ArtworkItem from "../components/ArtworkItem";
import Filters from "../components/Products/Filters";
import ReactPaginate from 'react-paginate';
import { getArtworks } from "../actions/artworks";
import {
  filterByCategory,
  filterBySearch,
  filterGeneric,
  filterManufacturer,
  filterBySubcategory,
} from "../utils/filters";
import { getDepartments } from "../actions/departments";
import { getTypes } from "../actions/types";

const Artworks = () => {
  const { search } = useLocation();
  const { push } = useHistory();
  const [products, setProducts] = useState([]);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState("none");
  const [selectedCategory, setSelectedCategory] = useState("Todas");

  const filters = queryString.parse(search);

  const getProductsAndCategories = async () => {
    const data = await getArtworks();
    setCategories(getDepartments());
    setTypes(getTypes());

    const categoryId = parseInt(filters.category);

    if (categoryId) {
      categoryClicked({ preventDefault: () => {} });
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

    return setCurrentProducts(await getArtworks());
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
    push(`/artworks?department=${category}`);
  };

  const [currentPosts, setCurrentPosts] = useState(null);
  const [postsPerPage] = useState(10);

  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + postsPerPage;
    setCurrentPosts(currentProducts.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(currentProducts.length / postsPerPage))
  }, [itemOffset, postsPerPage, currentProducts])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * postsPerPage) % currentProducts.length;
    setItemOffset(newOffset);
  };
  return (
    <>
      <MainNav query={queryString.parse(search).q} />

      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row px-5 sm:px-20 pt-5 lg:pt-16 pb-20">
        <Filters
          categoryClicked={categoryClicked}
          categories={categories}
          types={types}
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
                  <ArtworkItem
                    data={product}
                    key={`product-item-${product.id}`}
                  />
                ))}
              </div>
              <ReactPaginate
                breakLabel="..."
                breakClassName="bg-white px-3 py-2 cursor-pointer justify-self-end"
                previousLabel="Ant.."
                nextLabel="Sig.."
                onPageChange={handlePageClick}
                initialPage={0}
                marginPagesDisplayed={1}
                pageCount={pageCount}
                renderOnZeroPageCount={null}
                containerClassName='py-3 flex justify-center text-center'
                previousLinkClassName='cursor-pointer bg-complementary relative inline-flex items-center px-8 py-3 text-sm font-medium'
                nextLinkClassName='cursor-pointer bg-complementary relative inline-flex items-center px-8 py-3 text-sm font-medium'
                pageLinkClassName='cursor-pointer px-4 py-3 bg-complementary mx-0.5 relative inline-flex items-center text-sm font-medium rounded-sm'
                activeLinkClassName='pointer-events-none'
                nextClassName='cursor-pointer mr-0.5 rounded-sm truncate'
                previousClassName='cursor-pointer ml-0.5 rounded-sm truncate'
                disabledClassName='pointer-events-none'
              />
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Artworks;
