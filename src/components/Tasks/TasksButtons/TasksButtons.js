import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_MODAL } from '../../../constants/constants';
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
        Очистить
      </button>
      <button className='tasks-button' onClick={() => openModal()}>
        Создать
      </button>
    </section>
  );
}

export default TasksButtons;
