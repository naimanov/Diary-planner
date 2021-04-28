import React, { useState, useContext } from 'react';
import SingleTask from './SingleTask';
import { GlobalContext } from '../../context/globalContext';

function Tasks() {
  const { tasks } = useContext(GlobalContext);
  return (
    <div>
      {tasks.map((task) => {
        return <SingleTask text={task.text} done={task.done} id={task.id} />;
      })}
    </div>
  );
}

export default Tasks;
