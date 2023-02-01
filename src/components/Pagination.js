import React from "react";
import { MdEast, MdWest } from "react-icons/md";

const Pagination = ({
  setCurrentPage,
  totalCountries,
  countriesPerPage,
  currentPage,
}) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalCountries / countriesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handlePrevious = () => {
    if (currentPage === 1) return;
    setCurrentPage((currentPage) => currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage === pageNumbers.length) return;
    setCurrentPage((currentPage) => currentPage + 1);
  };
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="pagination">
      <div className="previous">
        <button onClick={handlePrevious}>
          <MdWest />
        </button>
      </div>
      <div className="page-numbers">
        {pageNumbers.map((number) => (
          <button onClick={() => paginate(number)}>{number}</button>
        ))}
      </div>
      <div className="next">
        <button onClick={handleNext}>
          <MdEast />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
