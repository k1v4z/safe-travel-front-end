import usePlanStore from "@/app/stores/planStore";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface DayPopupProps {
  onClose: () => void;
  onAddToPlanStore: (startDate: Date, endDate: Date) => void;
}
const DayPopup = ({ onClose, onAddToPlanStore }: DayPopupProps) => {
  const {plan} = usePlanStore();
  const [startDate, setStartDate] = useState<Date>(new Date(plan.date));
  const [endDate, setEndDate] = useState<Date>(new Date(plan.date));
  const [error, setError] = useState<string | null>(null);
  
  const handleStartDateChange = (date: Date | null) => {
    if (date && date <= (endDate || new Date())) {
      setStartDate(date);
      setError(null);
    } else {
      setError("Start date must be less than or equal to the end date.");
    }
  };

  const handleEndDateChange = (date: Date | null) => {
    if (date && date >= (startDate || new Date())) {
      setEndDate(date);
      setError(null);
    } else {
      setError("End date must be greater than or equal to the start date.");
    }
  };

  const handleAddToPlan = () => {
    if (startDate && endDate) {
      onAddToPlanStore(startDate, endDate);
    } else {
      setError("Please select both start and end dates.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <label className="block mb-2">Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={handleStartDateChange}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className="border p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-2">End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={handleEndDateChange}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            className="border p-2 rounded"
          />
        </div>
        <button onClick={handleAddToPlan} className="bg-blue-500 text-white p-2 rounded">
          Add to Plan
        </button>
        <button onClick={onClose} className="mb-4 bg-red-500 text-white p-2 rounded ml-4">
          Close
        </button>
      </div>
    </div>
  );
};

export default DayPopup;
