import React from 'react';
import { OPEN_MODAL } from '../../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { clearAllTasks } from '../../../Firebase/db';

function TasksButtons() {
  const history = useHistory();
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.dateReducer.selectedDate);
  const userId = useSelector((state) => state.tasksReducer.userId);

  const clearAll = () => {
    try {
      clearAllTasks(userId, selectedDate);
    } catch (err) {
      history.push('/error');
      console.log(err);
    }
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