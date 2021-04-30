import React from 'react';
import TaskDate from '../../components/TasksDate/TasksDate';
import Tasks from '../../components/Tasks/Tasks';
import TasksButtons from '../../components/TasksButtons/TasksButtons';

function dayTasks() {
  return (
    <div className='day-tasks'>
      <div>
        <TaskDate />
        <Tasks />
      </div>

      <TasksButtons />
    </div>
  );
}

export default dayTasks;
