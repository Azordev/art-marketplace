import React from "react";
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage, paginateFront, paginateBack}) =>
{

  const pageNumbers = [...Array(Math.ceil(totalPosts / postsPerPage)+1).keys()].slice(1);

  return (
    <div className='py-3 flex justify-center text-center'>
      <nav className='block'>
        <ul className='flex pl-0 rounded list-none flex-nowrap'>
          <li>
            <a
              onClick={paginateBack}
              href="#"
              style={{backgroundColor: "#F8F1F1"}}
              className={
                currentPage===1
                ?"hover:bg-blue-200 relative inline-flex items-center px-4 py-2 text-sm font-medium pointer-events-none"
                :"hover:bg-blue-200 relative inline-flex items-center px-4 py-2 text-sm font-medium"
              }

            >Anterior</a>
          </li>
          <li>
            {pageNumbers.map((number) => (
              <a
              	key={`page-item-${number}`}
                onClick={(e) => paginate(e, number)}
                href='#'
                style={{backgroundColor: currentPage===number||"#F8F1F1"}}
                className= "mx-0.5 bg-white bg-red-300 hover:bg-blue-200 relative inline-flex items-center px-4 py-2 text-sm font-medium"
              >
                {number}
              </a>
            ))}
          </li>
          <li>
            <a
              onClick={paginateFront}
              href="#"
              style={{backgroundColor: "#F8F1F1"}}
              className={
                currentPage === pageNumbers.length
                ?"hover:bg-blue-200 relative inline-flex items-center px-4 py-2 text-sm font-medium pointer-events-none"
                :"hover:bg-blue-200 relative inline-flex items-center px-4 py-2 text-sm font-medium"
              }
              >Siguiente</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Pagination;
