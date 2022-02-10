import React from "react";
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, paginateFront, paginateBack}) =>
{

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='py-3 flex justify-center text-center'>
      <nav className='block'>
        <ul className='flex pl-0 rounded list-none flex-nowrap'>
          <li>
            <a
              onClick={(e) => paginateBack(e)}
              href="#"
              className={
                currentPage===1
                ?"bg-red-300 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium pointer-events-none"
                :"bg-red-300 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              }

            >Anterior</a>
          </li>
          <li>
            {pageNumbers.map((number) => (
              <a
              	key={number}
                onClick={(e) => paginate(e, number)}
                href='#'
                className={
                  currentPage === number
                    ? "mx-0.5 bg-blue bg-red-300 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 text-sm font-medium"
                    : "mx-0.5 bg-white bg-red-100 text-gray-500 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 text-sm font-medium"
                }
              >
                {number}
              </a>
            ))}
          </li>
          <li>
            <a
              onClick={(e) => paginateFront(e)}
              href="#"
              className={
                currentPage === pageNumbers.length
                ?"bg-red-300 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium pointer-events-none"
                :"bg-red-300 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 border text-sm font-medium"
              }
              >Siguiente</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
