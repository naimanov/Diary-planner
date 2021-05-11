import React from 'react';
import { dateToString } from '../../helpers/dateToString';

function CalendarDay({ day, selectedDate }) {
  const { date, month, dateNumber } = day;
  const currentDate = new Date();
  const isSelected = dateToString(selectedDate) === dateToString(date);
  const isCurrent = dateToString(date) === dateToString(currentDate);

  const classes = `calendar-day ${
    month === 'currentMonth' ? 'current-month-day' : null
  } ${isCurrent ? 'calendar-day-current' : null} ${
    isSelected ? 'calendar-day-selected' : null
  }`;

  return (
    <div data-date={date} className={classes}>
      {dateNumber}
    </div>
  );
}

export default CalendarDay;
