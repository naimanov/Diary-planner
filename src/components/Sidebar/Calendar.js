import React, { useState, useEffect } from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { getMonthName } from '../../helpers/getMonthName';

function Calendar() {
  const [calendarDays, setCalendarDays] = useState({});
  const [calendarTitle, setCalendarTitle] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getCalendar = (year, month) => {
    const date = new Date(year, month);

    const prevMonth = [];
    for (let i = date.getDay() - 1; i > 0; i--) {
      const date = new Date(year, month);
      date.setDate(date.getDate() - i);
      prevMonth.push(date.getDate());
    }
    const currentMonth = [];
    while (String(date.getMonth()) === String(month)) {
      currentMonth.push(date.getDate());
      date.setDate(date.getDate() + 1);
    }
    const nextMonth = [];
    while (prevMonth.length + currentMonth.length + nextMonth.length < 42) {
      nextMonth.push(date.getDate());
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

  const getNowMonth = () => {
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();
    const monthName = getMonthName(month);
    const title = monthName + ' ' + year;
    return title;
  };

  useEffect(() => {
    setCalendarTitle(getNowMonth());
    setCalendarDays(getCalendar(2021, 3));
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <>
      <div className='calendar-title-container'>
        <h4>{calendarTitle}</h4>
        <div>
          <button className='date-button'>
            <FaChevronLeft />
          </button>
          <button className='date-button'>
            <FaChevronRight />
          </button>
        </div>
      </div>
      <div className='day-names-container'>
        {calendarDays.dayNames.map((dayName) => {
          return (
            <div className='calendar-day calendar-day-names'>
              <span>{dayName}</span>
            </div>
          );
        })}{' '}
      </div>

      <div className='calendar'>
        {calendarDays.prevMonth.map((day) => {
          return (
            <div className='calendar-day'>
              <span>{day}</span>
            </div>
          );
        })}
        {calendarDays.currentMonth.map((day) => {
          return (
            <div className='calendar-day current-month-day'>
              <span>{day}</span>
            </div>
          );
        })}
        {calendarDays.nextMonth.map((day) => {
          return (
            <div className='calendar-day'>
              <span>{day}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Calendar;
