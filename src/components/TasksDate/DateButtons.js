import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { SET_NEXT_DATE, SET_PREV_DATE } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';

function DateButtons() {
  const dispatch = useDispatch();

  const prevDate = () => {
    dispatch({ type: SET_PREV_DATE });
  };

  const nextDate = () => {
    dispatch({ type: SET_NEXT_DATE });
  };

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
