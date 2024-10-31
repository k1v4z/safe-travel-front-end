import React from 'react';
import Calendar from './Calendar';

const DateRangeSelector: React.FC = () => {
  return (
    <div className="shadow-lg mb-10 mt-10 rounded-lg p-5">
      <div className="border-b-2 border-gray-300 text-gray-600 mb-5">
        <p>Start date </p>
      </div>
      <div className="flex justify-center">
        <Calendar />
      </div>
    </div>
  );
}

export default DateRangeSelector;