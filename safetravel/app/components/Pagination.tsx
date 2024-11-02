import React from "react";

interface PaginationProps {
  currentPage: number;
  setPage: (page: number) => void;
  totalPages: number
}

const Pagination = ({currentPage, setPage, totalPages}: PaginationProps) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      setPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setPage(currentPage + 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    setPage(pageNumber);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);

    if (currentPage === 1) {
      endPage = Math.min(totalPages, 3);
    } else if (currentPage === totalPages) {
      startPage = Math.max(1, totalPages - 2);
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          className={`px-4 py-2 mx-1 ${currentPage === i ? "bg-blue-500 text-white" : "bg-gray-300"}`}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div className="flex justify-center mt-5">
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1 bg-gray-300 rounded"
      >
        Previous
      </button>
      {renderPageNumbers()}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1 bg-gray-300 rounded"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
