import React from 'react';
import { CLEAR_ALL_TASKS, OPEN_MODAL } from '../../constants/constants';
import { useDispatch } from 'react-redux';

function TasksButtons() {
  const dispatch = useDispatch();

  const clearAll = () => {
    dispatch({ type: CLEAR_ALL_TASKS });
  };

  const openModal = () => {
    dispatch({ type: OPEN_MODAL });
  };

  return (
    <section className='buttons-container'>
      <button className='tasks-button' onClick={() => clearAll()}>
        clear all
      </button>
      <button className='tasks-button' onClick={() => openModal()}>
        add
      </button>
    </section>
  );
}

export default TasksButtons;
