import React from 'react';
import { useDispatch } from 'react-redux';
import {
  SET_CURRENT_DATE,
  SET_CALENDAR_DATE,
} from '../../../constants/constants';

function TodayButton() {
  const dispatch = useDispatch();

  const selectTodayDate = () => {
    dispatch({ type: SET_CURRENT_DATE });
    dispatch({ type: SET_CALENDAR_DATE, payload: new Date() });
  };

  return (
    <button className='today-button' onClick={selectTodayDate}>
      Сегодня
    </button>
  );
}

export default TodayButton;
