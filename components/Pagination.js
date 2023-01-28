import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div class="flex justify-center">
  <nav aria-label="Page navigation example">
    <ul class="flex list-style-none">
    {pageNumbers.map(number => (
      <li key={number} class="page-item">
        <a  onClick={() => paginate(number)} 
          class="page-link cursor-pointer relative block py-1.5 px-3  border-0 bg-transparent outline-none transition-all duration-300 rounded text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
          >{number}</a></li> ))}
    </ul>
  </nav>
</div>
   
  );
};

export default Pagination;