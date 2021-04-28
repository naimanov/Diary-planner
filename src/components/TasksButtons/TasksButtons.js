import React, { useContext } from 'react';
import { GlobalContext } from '../../context/globalContext';

function TasksButtons() {
  const { clearAll, createTaskOpen } = useContext(GlobalContext);
  return (
    <section className='buttons-container'>
      <button className='tasks-button' onClick={() => clearAll()}>
        clear all
      </button>
      <button className='tasks-button' onClick={() => createTaskOpen()}>
        add
      </button>
    </section>
  );
}

export default TasksButtons;
