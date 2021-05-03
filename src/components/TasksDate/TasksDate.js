import React, { useContext } from 'react';
import { getCurrentDate } from '../../helpers/getCurrentDate';
import DateButtons from '../TasksDate/DateButtons';
import { getMonthName } from '../../helpers/getMonthName';
import { GlobalContext } from '../../context/globalContext';

function TasksDate() {
  const { selectedDate } = useContext(GlobalContext);
  // // const currentDate = getCurrentDate();
  // // const { currentDay, currentYear } = currentDate;
  // // const currentMonth = getMonthName(currentDate.currentMonth).toLowerCase();

  const day = selectedDate.getDate();
  const month = getMonthName(selectedDate.getMonth()).toLowerCase();
  const year = selectedDate.getFullYear();

  return (
    <section className='date'>
      <div className='date-container'>
        <h1 className='tasks-date'>
          {day} {month} {year}
        </h1>
      </div>
      <DateButtons />
    </section>
  );
}

export default TasksDate;
