import usePlanStore from '@/app/stores/planStore';
import React, { useState, useEffect } from 'react';

const Calendar = () => {
  const {plan, setPlan} = usePlanStore()
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);
  const [dayClicked, setDayClicked] = useState<number | null>(null);

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

  const handleDayClick = (day: number) => {
    const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day + 1);
    const vietnamDate = new Date(selectedDate.toLocaleString('en-US', { timeZone: 'Asia/Ho_Chi_Minh' }));
    setDayClicked(day);
    setPlan({...plan, date: vietnamDate.toISOString()});
  }

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  console.log(plan);
  
  return (
    <div className="w-full text-center">
      <div className="flex justify-between items-center mb-5">
        <span className='font-bold'>{monthNames[currentDate.getMonth()]} <span>{currentDate.getFullYear()}</span></span>
        <div className="flex space-x-2">
          <span className="cursor-pointer" onClick={handlePrevMonth}>&#10094;</span>
          <span className="cursor-pointer" onClick={handleNextMonth}>&#10095;</span>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {
          weekdays.map(weekday => (
            <div className='font-bold' key={weekday}>{weekday}</div>
          ))
        }
        {daysInMonth.map(day => (
          <div
            className={`cursor-pointer font-poppins ${dayClicked === day ? 'bg-blue-500 text-white rounded-xl' : ''}`}
            key={day}
            onClick={() => handleDayClick(day)}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;