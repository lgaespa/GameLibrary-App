import React from 'react';
import "./Pagination.css"

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagContainer">
        {pageNumbers.map(number => (
          <div key={number} onClick={() => paginate(number)} className="pagNumber">
            <a className >
              {number}
            </a>
          </div>
        ))}
    </div>
  );
};

export default Pagination;