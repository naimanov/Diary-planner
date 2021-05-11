import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

function CalendarHeader({ monthName, year, prevMonth, nextMonth }) {
  return (
    <div className='calendar-title-container'>
      <h3>
        {monthName} {year}
      </h3>
      <div>
        <button className='date-button' onClick={() => prevMonth()}>
          <FaChevronLeft />
        </button>
        <button className='date-button' onClick={() => nextMonth()}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
}

export default CalendarHeader;
