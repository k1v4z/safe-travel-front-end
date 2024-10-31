import React, { useState, useEffect } from 'react';

const Calendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const days = new Date(year, month + 1, 0).getDate();
    const daysArray = Array.from({ length: days }, (_, i) => i + 1);
    setDaysInMonth(daysArray);
  }, [currentDate]);

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <div className="w-full text-center font-bold">
      <div className="flex justify-between items-center mb-5">
        <span>{monthNames[currentDate.getMonth()]} <span>{currentDate.getFullYear()}</span></span>
        <div className="flex space-x-2">
          <span className="cursor-pointer" onClick={handlePrevMonth}>&#10094;</span>
          <span className="cursor-pointer" onClick={handleNextMonth}>&#10095;</span>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
        {daysInMonth.map(day => (
          <div className='cursor-pointer' key={day}>{day}</div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;