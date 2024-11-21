type PaginationProps = {
    currentPage: number;       // The current page number
    totalPages: number;        // The total number of pages
    onPageChange: (page: number) => void; // Function to change the page
  };
  
  const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    return (
      <div className="flex items-center justify-center gap-2 p-4">
        <button
          className="px-2 py-1 border border-gray-300 rounded"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={`px-2 py-1 border rounded ${
              currentPage === i + 1 ? 'bg-blue-500 text-white' : 'border-gray-300'
            }`}
            onClick={() => onPageChange(i + 1)}
          >
            {i + 1}
          </button>
        ))}
        <button
          className="px-2 py-1 border border-gray-300 rounded"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
    );
  };
  
  export default Pagination;