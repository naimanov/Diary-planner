import React from 'react';
import { BsCalendar } from 'react-icons/bs';
import { FaCaretDown } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { TOGGLE_CALENDAR_SHOW } from '../../../constants/constants';

function CalendarButton() {
  const dispatch = useDispatch();
  const showCalendar = useSelector(
    (state) => state.calendarReducer.showCalendar
  );

  const toggleCalendarShow = () => {
    dispatch({ type: TOGGLE_CALENDAR_SHOW });
  };

  return (
    <button className='calendar-button' onClick={toggleCalendarShow}>
      <BsCalendar />
      <FaCaretDown
        className={`
      ${showCalendar ? 'calendar-open' : 'calendar-close'}`}
      />
    </button>
  );
}

export default CalendarButton;
