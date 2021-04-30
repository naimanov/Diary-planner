import React from 'react';
import DateButtons from '../TasksDate/DateButtons';

function TasksDate() {
  return (
    <section className='date'>
      <div className='date-container'>
        <h1 className='tasks-date'>28 апреля 2021 </h1>
      </div>
      <DateButtons />
    </section>
  );
}

export default TasksDate;
