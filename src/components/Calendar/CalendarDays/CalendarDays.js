import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_SELECTED_DATE } from '../../../constants/constants';
import CalendarSingleDay from './CalendarSingleDay';

function CalendarDays() {
  const dispatch = useDispatch();

  const selectedDate = useSelector((state) => state.dateReducer.selectedDate);
  const calendarDays = useSelector(
    (state) => state.calendarReducer.calendarDays
  );
  const currentDate = new Date();

  const handleCalendarDate = (e) => {
    const date = new Date(e.target.dataset.date);
    if (!window.getSelection().toString()) {
      dispatch({ type: SET_SELECTED_DATE, payload: date });
    }
  };

  return (
    <div
      className='calendar-days-conteiner'
      onClick={(e) => handleCalendarDate(e)}
    >
      {calendarDays.map((day) => {
        return (
          <CalendarSingleDay
            key={day.date + day.month}
            day={day}
            selectedDate={selectedDate}
            currentDate={currentDate}
          />
        );
      })}
    </div>
  );
}

export default CalendarDays;
