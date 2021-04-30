import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

function DateButtons() {
  return (
    <div>
      <button className='date-button'>
        <FaChevronLeft />
      </button>
      <button className='date-button'>
        <FaChevronRight />
      </button>
    </div>
  );
}

export default DateButtons;
