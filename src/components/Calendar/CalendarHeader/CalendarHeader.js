import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { GET_PREV_MONTH, GET_NEXT_MONTH } from '../../../constants/constants';

function CalendarHeader({ monthName, year }) {
  const dispatch = useDispatch();

  const prevMonth = () => {
    dispatch({ type: GET_PREV_MONTH });
  };

  const nextMonth = () => {
    dispatch({ type: GET_NEXT_MONTH });
  };

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
