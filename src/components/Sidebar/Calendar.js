import React, { useState, useEffect, useContext } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { getMonthName } from '../../helpers/getMonthName';
import { GlobalContext } from '../../context/globalContext';

function Calendar() {
  const { selectedDate, setSelectedDate } = useContext(GlobalContext);

  const [calendarDate, setCalendarDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const month = calendarDate.getMonth();
  const year = calendarDate.getFullYear();
  const monthName = getMonthName(month);

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth();

  const prevMonth = () => {
    const date = calendarDate;
    date.setMonth(date.getMonth() - 1);
    setCalendarDate(new Date(date));
  };

  const nextMonth = () => {
    const date = calendarDate.setMonth(calendarDate.getMonth() + 1);
    setCalendarDate(new Date(date));
  };

  const getCalendar = (year, month) => {
    const date = new Date(year, month);

    const prevMonth = [];
    for (let i = date.getDay() - 1; i > 0; i--) {
      const prevDate = new Date(year, month);
      prevDate.setDate(prevDate.getDate() - i);
      prevMonth.push(prevDate);
    }

    const currentMonth = [];
    while (String(date.getMonth()) === String(month)) {
      const currentDate = new Date(date);
      currentMonth.push(currentDate);
      date.setDate(date.getDate() + 1);
    }

    const nextMonth = [];
    while (prevMonth.length + currentMonth.length + nextMonth.length < 42) {
      const nextDate = new Date(date);
      nextMonth.push(nextDate);
      date.setDate(date.getDate() + 1);
    }
    const dayNames = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    const calendar = {
      dayNames: dayNames,
      prevMonth: prevMonth,
      currentMonth: currentMonth,
      nextMonth: nextMonth,
    };
    return calendar;
  };

  const handleCalendarDate = (e) => {
    const date = new Date(e.target.dataset.date);
    if (!window.getSelection().toString()) {
      setSelectedDate(date);
    }
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
      <div className='day-names-container'>
        {calendarDays.dayNames.map((dayName) => {
          return (
            <div className='calendar-day calendar-day-names'>{dayName}</div>
          );
        })}{' '}
      </div>
      <div className='calendar' onClick={(e) => handleCalendarDate(e)}>
        {calendarDays.prevMonth.map((date) => {
          return (
            <div
              data-date={date}
              className={`${
                date.getDate() === selectedDate.getDate() &&
                date.getMonth() === selectedDate.getMonth()
                  ? 'calendar-day calendar-day-selected'
                  : 'calendar-day'
              }`}
            >
              {date.getDate()}
            </div>
          );
        })}
        {calendarDays.currentMonth.map((date) => {
          return (
            <div
              data-date={date}
              className={`
              ${
                date.getDate() === selectedDate.getDate() &&
                date.getMonth() === selectedDate.getMonth()
                  ? 'calendar-day calendar-day-selected'
                  : 'calendar-day'
              }        
              ${
                date.getDate() === currentDay &&
                date.getMonth() === currentMonth
                  ? 'calendar-day calendar-day-names calendar-day-current'
                  : 'calendar-day calendar-day-names'
              }`}
            >
              {date.getDate()}
            </div>
          );
        })}
        {calendarDays.nextMonth.map((date) => {
          return (
            <div
              data-date={date}
              className={`${
                date.getDate() === selectedDate.getDate() &&
                date.getMonth() === selectedDate.getMonth()
                  ? 'calendar-day calendar-day-selected'
                  : 'calendar-day'
              }`}
            >
              {date.getDate()}
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Calendar;
