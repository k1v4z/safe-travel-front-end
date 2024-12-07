import React from "react";

const Pagination: React.FC<{
  activePage: number;
  totalPages: number;
  setActivePage: React.Dispatch<React.SetStateAction<number>>;
}> = ({ activePage, totalPages, setActivePage }) => {
  const paginationButtons = [];
  const maxVisiblePages = 10;

  const startPage = Math.max(1, activePage - Math.floor(maxVisiblePages / 2));
  const endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

  // Nút "Previous" nếu không phải là trang đầu tiên
  if (activePage > 1) {
    paginationButtons.push(
      <button
        key="prev"
        className="pagination-button rounded-full px-4 py-2 mx-1 bg-[#f0f0f0] hover:bg-[#ddd] transition-colors"
        onClick={() => setActivePage(activePage - 1)}
      >
        &lt;
      </button>
    );
  }

  // Các nút phân trang (1, 2, 3...)
  for (let page = startPage; page <= endPage; page++) {
    paginationButtons.push(
      <button
        key={page}
        className={`pagination-button rounded-full px-4 py-2 mx-1 ${activePage === page ? "bg-custom-blue text-white font-bold" : "bg-[#f0f0f0] hover:bg-[#ddd] transition-colors"}`}
        onClick={() => setActivePage(page)} // Cập nhật trang hiện tại
      >
        {page}
      </button>
    );
  }

  // Nút "Next" nếu không phải là trang cuối cùng
  if (activePage < totalPages) {
    paginationButtons.push(
      <button
        key="next"
        className="pagination-button rounded-full px-4 py-2 mx-1 bg-[#f0f0f0] hover:bg-[#ddd] transition-colors"
        onClick={() => setActivePage(activePage + 1)} // Chuyển sang trang tiếp theo
      >
        &gt;
      </button>
    );
  }

  return <div className="flex justify-center mt-4">{paginationButtons}</div>;
};

export default Pagination;
