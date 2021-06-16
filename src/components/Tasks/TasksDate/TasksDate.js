import React from 'react';
import DateButtons from '../TasksDate/DateButtons';
import { getMonthNameTasks } from '../../../helpers/getMonthNameTasks';
import { useSelector } from 'react-redux';

function TasksDate() {
  const selectedDate = useSelector((state) => state.dateReducer.selectedDate);

  const day = selectedDate.getDate();
  const month = getMonthNameTasks(selectedDate.getMonth()).toLowerCase();
  const year = selectedDate.getFullYear();

  return (
    <section className='date'>
      <DateButtons />
      <div className='date-container'>
        <h2 className='tasks-date'>
          {day} {month} {year}
        </h2>
      </div>
    </section>
  );
}

export default TasksDate;
