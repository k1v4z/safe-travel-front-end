"use client";

import React, { useState } from 'react';
import Form from '../Destination/Form';

const FakeBtn = () => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <button onClick={toggleForm} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors z-10">
        Show Form
      </button>

      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Lớp phủ với độ mờ */}
          <div className="absolute inset-0 bg-black bg-opacity-30 z-40" onClick={closeForm} />

          {/* Form chiếm toàn bộ chiều rộng */}
          <div className="flex items-center justify-center z-50 w-full">
            <Form closeForm={closeForm} /> {/* Truyền closeForm như một prop */}
          </div>
        </div>
      )}
    </div>
  );
};

export default FakeBtn;
