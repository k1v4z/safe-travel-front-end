"use client";

import { useState } from "react";
const FilterBar = ({
  onAddUserClick,
  onSearch,
}: {
  onAddUserClick: () => void;
  onSearch: (username: string) => void;
}) => {
  const [searchText, setSearchText] = useState("");

  const handleFilterClick = () => {
    onSearch(searchText); // Gửi username về cha
  };

  return (
    <div className="flex items-center justify-between p-4">
      <button
        className="px-4 py-2 bg-[#326D7B] text-white rounded"
        onClick={onAddUserClick}
      >
        + Add New User
      </button>
      <div className="flex items-center gap-2">
        <div className="search-container">
          <img
            src="pictures/logo-find.png"
            alt="Search Icon"
            className="absolute z-10 mt-1 ml-0.5"
          />
          <input
            type="text"
            placeholder="Search in User"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border border-gray-300 px-4 py-2 rounded-lg search-input relative pl-10"
          />
        </div>
        <button
          className="px-4 py-2 border border-gray-200 bg-gray-200 rounded-lg flex items-center"
          onClick={handleFilterClick} // Kích hoạt tìm kiếm
        >
          <img src="pictures/logo-filter.png" alt="Filter Icon" className="mr-2" />
          Filter
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
