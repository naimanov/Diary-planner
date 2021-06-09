import React, { useEffect } from 'react';
import { getMonthName } from '../../helpers/getMonthName';
import { getCalendar } from '../../helpers/getCalendar';
import { useDispatch, useSelector } from 'react-redux';
import { GET_CALENDAR_DAYS } from '../../constants/constants';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import CalendarDayNames from './CalendarDayNames/CalendarDayNames';
import CalendarDays from './CalendarDays/CalendarDays';

function Calendar() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.calendarReducer.isLoading);
  const calendarDate = useSelector(
    (state) => state.calendarReducer.calendarDate
  );

  const month = calendarDate.getMonth();
  const year = calendarDate.getFullYear();
  const monthName = getMonthName(month);

  useEffect(() => {
    const calendarDays = getCalendar(year, month);
    dispatch({ type: GET_CALENDAR_DAYS, payload: calendarDays });
  }, [calendarDate]);

  if (isLoading) {
    return null;
  }

  return (
    <article className='sidebar'>
      <CalendarHeader monthName={monthName} year={year} />
      <CalendarDayNames />
      <CalendarDays />
    </article>
  );
}

export default Calendar;
