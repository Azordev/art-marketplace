import React from 'react';
import { Link } from 'react-router-dom';

import FilterIcon from '../../assets/icons/filtro.png';
import { useSearchParams } from '../../hooks/useSearchParams';

const Filters = ({
  departments,
  types,
  selectedFilter,
  setFilter,
  setSelectedDepartment,
  setSelectedTypes
}) => {
  const { updateQueryParams } = useSearchParams();

  const handleClick = (e, filter) => {
    e.preventDefault();

    if (selectedFilter === filter) {
      return setFilter('none');
    }
    return setFilter(filter);
  };

  const handleTypes = (e, type) => {
    e.preventDefault();
    setSelectedTypes(type);
    updateQueryParams('type', type);
  };

  const handleDepartment = (e, department) => {
    e.preventDefault();
    setSelectedDepartment(department);
    updateQueryParams('department', department);
  };

  return (
    <>
      <div className="flex w-full lg:w-1/5 items-start justify-center sm:justify-start my-10 lg:my-0">
        <div className="flex-col w-full mr-4 xl:max-w-filter sm:flex-row lg:flex-col relative inline-flex items-start sm:space-x-8 lg:space-x-0 space-y-4 sm:space-y-0 lg:space-y-4">
          <div className="flex items-center space-x-3 xl:mb-4">
            <img
              src={FilterIcon}
              alt="filter"
              className="block object-contain h-6 w-7 opacity-80"
            />
            <p className="text-3xl">Filtro</p>
          </div>
          <Link
            to="#"
            className="text-center block w-full py-3.5 text-xl font-bold leading-6 text-black whitespace-no-wrap bg-add rounded-md shadow-sm"
            style={
              selectedFilter === 'department'
                ? { backgroundColor: '#11698E', color: '#FFF' }
                : { backgroundColor: '#F8F1F1', color: '#000' }
            }
            onClick={(e) => handleClick(e, 'department')}
          >
            Departamentos
          </Link>
          {selectedFilter === 'department' && (
            <div className="border border-black rounded-md w-full pl-2 max-h-96 overflow-y-scroll">
              {departments.map((department) => (
                <div
                  key={department.id}
                  onClick={(e) => handleDepartment(e, department.en)}
                  className="py-2 cursor-pointer text-black underline hover:no-underline"
                >
                  {department.es}
                </div>
              ))}
            </div>
          )}
          <Link
            to="#"
            className="text-center block w-full py-3.5 text-xl font-bold leading-6 text-black whitespace-no-wrap bg-add rounded-md shadow-sm"
            style={
              selectedFilter === 'types'
                ? { backgroundColor: '#11698E', color: '#FFF' }
                : { backgroundColor: '#F8F1F1', color: '#000' }
            }
            onClick={(e) => handleClick(e, 'types')}
          >
            Por Tipo
          </Link>
          {selectedFilter === 'types' && (
            <div className="border border-black rounded-md w-full pl-2  max-h-96 overflow-y-scroll">
              {types.map((type) => (
                <div
                  key={`${type.id}-key`}
                  onClick={ (e) => handleTypes(e, type.en) }
                  className="py-2 cursor-pointer text-black underline hover:no-underline"
                >
                  {type.es}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Filters;
