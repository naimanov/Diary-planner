import React, { useContext } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { GlobalContext } from '../../context/globalContext';

function DateButtons() {
  const { prevDate, nextDate } = useContext(GlobalContext);
  return (
    <div>
      <button className='date-button' onClick={() => prevDate()}>
        <FaChevronLeft />
      </button>
      <button className='date-button' onClick={() => nextDate()}>
        <FaChevronRight />
      </button>
    </div>
  );
}

export default DateButtons;
