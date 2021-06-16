import React from 'react';
import { useDispatch } from 'react-redux';
import { SET_NEXT_DATE, SET_PREV_DATE } from '../../../constants/constants';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

function DateButtons() {
  const dispatch = useDispatch();

  const prevDate = () => {
    dispatch({ type: SET_PREV_DATE });
  };

  const nextDate = () => {
    dispatch({ type: SET_NEXT_DATE });
  };

  return (
    <div className='chevron-buttons-container'>
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
