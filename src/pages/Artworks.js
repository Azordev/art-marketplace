import React, { useState, useEffect, useMemo } from "react";
import { useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import { MainNav, Footer } from "../components";
import ArtworkItem from "../components/ArtworkItem";
import Filters from "../components/Products/Filters";
import ReactPaginate from 'react-paginate';
import {
    getArtworks,
    getArtworkswithFilter,
    // getArtworksByDepartment,
} from "../actions/artworks";
import {
    filterByDepartment,
    filterBySearch,
    filterBySubcategory,
    filterByType
} from "../utils/filters";
import { getDepartments } from "../actions/departments";
import { getTypes } from "../actions/types";

const Artworks = () => {
    const { search } = useLocation();
    const { push } = useHistory();

    const addQuery = (key, value) => {
      const searchParams = new URLSearchParams(search); 
      searchParams.set(key, value);
      push({
        pathname: 'artworks',
        search: searchParams.toString()
      });
    };

    const [products, setProducts] = useState([]);
    const [currentProducts, setCurrentProducts] = useState([]);

    const [departments, setDepartments] = useState([]);
    const [types, setTypes] = useState([]);

    const [selectedFilter, setSelectedFilter] = useState("none");
    const [selectedDepartment, setSelectedDepartment] = useState();
    const [selectedType, setSelectedTypes] = useState();


    // filters guarda la data del queryString - urlparams - convertir a useState
    const filters = useMemo(() =>  queryString.parse(search), [search]);

    // Funcion que pide data - importante---que no se repita mucho
    const getSomeArtworks = async () => {

        let data;
        if (filters) {
          data = await getArtworkswithFilter(filters);
        } else {          
          data = await getArtworks();
        }

        // Move direct a useEffect

        // const categoryId = parseInt(filters.category);

        // comprobar filtros para estilos
        // if (categoryId) {
            // departmentClicked({ preventDefault: () => {} });
            // setSelectedFilter("category");
        // }
        setProducts(data);
        setCurrentProducts(data);
    };

    // const skipArtworks = async (pageNumber) => {
    //   let data;
    //   if (filters) {
    //     data = await getArtworkswithFilter(filters);
    //   } else {          
    //     data = await getArtworks();
    //   }
    //   setProducts(data);
    //   setCurrentProducts(data);
    // }

    const filterAll = async () => {
        if (filters.subcategory) {
            return setCurrentProducts(filterBySubcategory(products, filters.subcategory));
        }
        if (filters.department) {
            setCurrentProducts(filterByDepartment(currentProducts, filters.department));
        }
        if (filters.q) {
            return setCurrentProducts(filterBySearch(products, filters.q));
        }
        if (filters.type) {
            setCurrentProducts(filterByType(currentProducts, filters.type));
        }

        // return setCurrentProducts(await getArtworks());
    };

    useEffect(() => {
      getSomeArtworks();
      // console.log(products)
        // filterAll();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filters, search, selectedDepartment, selectedType]);



    useEffect(() => {
        // Desactivar mientras se testea con solo filterAll
        setDepartments(getDepartments());
        setTypes(getTypes());

        getSomeArtworks();          

        // Json de Departamento y types para la barra de filtro
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Aqui empieza pagination config
    const [currentPosts, setCurrentPosts] = useState(null);
    const [postsPerPage] = useState(16);

    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        const endOffset = itemOffset + postsPerPage;
        // setCurrentPosts(currentProducts.slice(itemOffset, endOffset))
        // setPageCount(Math.ceil(currentProducts.length / postsPerPage))
        setPageCount(Math.ceil(100 / postsPerPage))
    }, [itemOffset, postsPerPage, currentProducts])

    const handlePageClick = (event) => {
        window.scrollTo(0,0)
        const newOffset = (event.selected * postsPerPage) % currentProducts.length;
        setItemOffset(newOffset);
        // console.log(event.selected)
        // skipArtworks(event.selected)

        // !!!!!Cuidao
        addQuery('skip', (event.selected + 1))
        // getSomeArtworks(filters);
    };

    // useEffect(() => {
    //   console.log(itemOffset)
    // }, [itemOffset])

    return ( 
      <>
        <MainNav query={queryString.parse(search).q} />

        <div className = "max-w-screen-2xl mx-auto flex flex-col lg:flex-row px-5 sm:px-20 pt-5 lg:pt-16 pb-20" >
        <Filters
          departments={departments}
          types={types}
          setFilter={setSelectedFilter}
          selectedFilter={selectedFilter}
          setSelectedDepartment={setSelectedDepartment}
          setSelectedTypes={setSelectedTypes}
          addQuery={addQuery}
        /> 
        <div className = "w-full lg:w-4/5 space-y-8" > 
          {
            selectedFilter === "none" && (
                <p>
              <b>Pro Tip: </b>Usa un filtro a la izquierda para limitar la
              búsqueda
            </p>
            )
          } {
            selectedFilter === "types" && (
                <div className="bg-tertiary text-white md:mr-8 lg:mr-20 xl:mr-3 2xl:mr-10">
              <h2 className="text-4xl px-4 py-2 font-bold">
                Por tipo {selectedType}
              </h2>
            </div>
            )
        } {
            selectedFilter === "department" && (
                <div className="bg-tertiary text-white md:mr-8 lg:mr-20 xl:mr-3 2xl:mr-10">
              <h2 className="text-4xl px-4 py-2 font-bold">
                Departamento {selectedDepartment}
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
                {
                  // currentPosts.map((product) => (
                  currentProducts.map((product) => (
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
                //initialPage={0}
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
