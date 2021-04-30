import React from 'react';

function Calendar() {
  const date = new Date(2021, 3);

  const array = [];

  for (let i = date.getDay(); i > 0; i--) {
    const date = new Date(2021, 3);
    date.setDate(date.getDate() - i);
    array.push(date.getDate());
  }

  while (array.length < 42) {
    array.push(date.getDate());
    date.setDate(date.getDate() + 1);
  }

  console.log(array);

  return <div></div>;
}

export default Calendar;
