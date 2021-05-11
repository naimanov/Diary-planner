import React, { useState, useEffect } from 'react';
import { getMonthName } from '../../helpers/getMonthName';
import { useDispatch, useSelector } from 'react-redux';
import CalendarDay from './CalendarDay';
import CalendarHeader from './CalendarHeader';
import { SET_SELECTED_DATE } from '../../constants/constants';
import { getCalendar } from '../../helpers/getCalendar';
import CalendarDayNames from './CalendarDayNames';

function Calendar() {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.dateReducer.selectedDate);

  const [calendarDate, setCalendarDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const month = calendarDate.getMonth();
  const year = calendarDate.getFullYear();
  const monthName = getMonthName(month);

  const handleCalendarDate = (e) => {
    const date = new Date(e.target.dataset.date);
    if (!window.getSelection().toString()) {
      dispatch({ type: SET_SELECTED_DATE, payload: date });
    }
  };

  const prevMonth = () => {
    const date = calendarDate.setMonth(calendarDate.getMonth() - 1);
    setCalendarDate(new Date(date));
  };

  const nextMonth = () => {
    const date = calendarDate.setMonth(calendarDate.getMonth() + 1);
    setCalendarDate(new Date(date));
  };

  useEffect(() => {
    setCalendarDays(getCalendar(year, month));
    setIsLoading(false);
  }, [calendarDate]);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <CalendarHeader
        monthName={monthName}
        year={year}
        prevMonth={prevMonth}
        nextMonth={nextMonth}
      />
      <CalendarDayNames />
      <div className='calendar' onClick={(e) => handleCalendarDate(e)}>
        {calendarDays.map((day) => {
          return <CalendarDay day={day} selectedDate={selectedDate} />;
        })}
      </div>
    </>
  );
}

export default Calendar;
