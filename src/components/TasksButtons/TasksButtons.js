import React from 'react';
import { OPEN_MODAL } from '../../constants/constants';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../Firebase/firebase';
import { clearAllTasks } from '../../actions/tasks';

function TasksButtons() {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.dateReducer.selectedDate);

  const clearAll = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(clearAllTasks(user.uid, selectedDate));
      }
    });
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
