import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { MainNav, Footer } from '../components';
import ArtworkItem from '../components/ArtworkItem';
import Filters from '../components/Products/Filters';
import ReactPaginate from 'react-paginate';
import { getArtworks } from '../actions/artworks';
import { getDepartments } from '../actions/departments';
import { getTypes } from '../actions/types';
import { useSearchParams } from '../hooks/useSearchParams';

const Artworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('none');
  const [selectedDepartment, setSelectedDepartment] = useState();
  const [selectedType, setSelectedTypes] = useState();
  const [totalArtworks, setTotalArtworks] = useState(0);
  const [postsPerPage] = useState(16);
  const { addQuery } = useSearchParams();

  const { search } = useLocation();

  const filters = useMemo(() => queryString.parse(search), [search]);

  const fetchArtworks = useCallback(async () => {
    const { total, data } = await getArtworks(filters, postsPerPage);
    setTotalArtworks(total);
    setArtworks(data);
  }, [filters, postsPerPage]);

  useEffect(() => {
    fetchArtworks();
  }, [filters, fetchArtworks]);

  useEffect(() => {
    setDepartments(getDepartments());
    setTypes(getTypes());
  }, []);

  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    setPageCount(Math.ceil(totalArtworks / postsPerPage));
  }, [postsPerPage, totalArtworks]);

  const handlePageClick = (event) => {
    window.scrollTo(0, 0);
    addQuery('page', (event.selected + 1));
  };

  return (
    <>
      <MainNav query={queryString.parse(search).q} />

      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row px-5 sm:px-20 pt-5 lg:pt-16 pb-20">
        <Filters
          departments={departments}
          types={types}
          setFilter={setSelectedFilter}
          selectedFilter={selectedFilter}
          setSelectedDepartment={setSelectedDepartment}
          setSelectedTypes={setSelectedTypes}
        />
        <div className="w-full lg:w-4/5 space-y-8">
          {
            selectedFilter === 'none' &&
            <p>
              <b>Pro Tip: </b>Usa un filtro a la izquierda para limitar la búsqueda
            </p>
          }
          {
            selectedFilter === 'types' &&
            <div className="bg-tertiary text-white md:mr-8 lg:mr-20 xl:mr-3 2xl:mr-10">
              <h2 className="text-4xl px-4 py-2 font-bold">
                Por tipo {selectedType}
              </h2>
            </div>
          }
          {
            selectedFilter === 'department' &&
              <div className="bg-tertiary text-white md:mr-8 lg:mr-20 xl:mr-3 2xl:mr-10">
                <h2 className="text-4xl px-4 py-2 font-bold">
                  Departamento {selectedDepartment}
                </h2>
              </div>
          }
          {
            artworks.length === 0
              ? <h1 className="text-center">
              No hay productos usando estos argumentos
              </h1>
              : <>
                <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4 w-full p-0 justify-evenly xl:justify-around">
                  {
                    artworks.map((product) =>
                      <ArtworkItem
                        data={product}
                        key={`product-item-${product.id}`}
                      />)
                  }
                </div>
                {
                  pageCount > 1 &&
                <ReactPaginate
                  breakLabel="..."
                  breakClassName="bg-white px-3 py-2 cursor-pointer justify-self-end"
                  previousLabel="Ant.."
                  nextLabel="Sig.."
                  onPageChange={handlePageClick}
                  forcePage={filters.page
                    ? (parseInt(filters.page) - 1)
                    : 0}
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
                }
              </>
          }
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Artworks;
