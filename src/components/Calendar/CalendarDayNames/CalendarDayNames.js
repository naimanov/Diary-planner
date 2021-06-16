import React from 'react';

function CalendarDayNames() {
  const dayNames = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

  return (
    <div className='day-names-container'>
      {dayNames.map((dayName) => {
        return (
          <div key={dayName} className='calendar-day calendar-day-names'>
            {dayName}
          </div>
        );
      })}
    </div>
  );
}

export default CalendarDayNames;
