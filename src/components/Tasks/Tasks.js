import React from 'react';
import TaskDate from './TasksDate/TasksDate';
import TasksButtons from './TasksButtons/TasksButtons';
import TasksList from './TasksList/TasksList';

function Tasks() {
  return (
    <article className='day-tasks'>
      <div>
        <TaskDate />
        <TasksList />
      </div>
      <TasksButtons />
    </article>
  );
}

export default Tasks;
