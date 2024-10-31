import Link from "next/link";
import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center space-x-3 mt-10">
      <Link href="#" className="px-4 py-2 bg-gray-200 rounded-full">
        &laquo;
      </Link>
      <Link href="#" className="px-4 py-2 bg-gray-200 rounded-full">
        1
      </Link>
      <Link href="#" className="px-4 py-2 bg-gray-200 rounded-full">
        2
      </Link>
      <Link href="#" className="px-4 py-2 bg-gray-200 rounded-full">
        3
      </Link>
      <Link href="#" className="px-4 py-2 bg-gray-200 rounded-full">
        &raquo;
      </Link>
    </div>
  );
};

export default Pagination;
