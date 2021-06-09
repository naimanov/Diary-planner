import React from 'react';
import DateButtons from '../TasksDate/DateButtons';
import { getMonthName } from '../../../helpers/getMonthName';
import { useSelector } from 'react-redux';

function TasksDate() {
  const selectedDate = useSelector((state) => state.dateReducer.selectedDate);

  const day = selectedDate.getDate();
  const month = getMonthName(selectedDate.getMonth()).toLowerCase();
  const year = selectedDate.getFullYear();

  return (
    <section className='date'>
      <div className='date-container'>
        <h2 className='tasks-date'>
          {day} {month} {year}
        </h2>
      </div>
      <DateButtons />
    </section>
  );
}

export default TasksDate;
