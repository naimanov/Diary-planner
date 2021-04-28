import React from 'react';
import Tasks from '../../components/Tasks/Tasks';
import TasksButtons from '../../components/TasksButtons/TasksButtons';

function dayTasks() {
  return (
    <div className='day-tasks'>
      <Tasks />
      <TasksButtons />
    </div>
  );
}

export default dayTasks;
