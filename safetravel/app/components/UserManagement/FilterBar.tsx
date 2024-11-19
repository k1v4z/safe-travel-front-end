const FilterBar = () => {
    return (
      <div className="flex items-center justify-between p-4 ">
        <button className="px-4 py-2 bg-[#326D7B] text-white rounded">+ Add New User</button>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search in User"
            className="border border-gray-300 px-4 py-2 rounded"
          />
          <button className="px-4 py-2 border border-gray-300 bg-gray-300 rounded">Filter</button>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 py-2 bg-[#326D7B] text-white rounded">Suspend All</button>
          <button className="px-4 py-2 bg-[#326D7B] text-white rounded">Archive All</button>
          <button className="px-4 py-2 bg-[#326D7B] text-white rounded">Delete All</button>
        </div>
      </div>
    );
  };
  
  export default FilterBar;