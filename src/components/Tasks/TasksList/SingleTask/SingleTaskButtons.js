import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EDIT_TASK } from '../../../../constants/constants';
import { deleteTask } from '../../../../Firebase/db';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

function SingleTaskButtons({ id }) {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.dateReducer.selectedDate);
  const userId = useSelector((state) => state.tasksReducer.userId);

  const removeTask = (id) => {
    deleteTask(userId, selectedDate, id);
  };

  const editTask = (id) => {
    dispatch({ type: EDIT_TASK, payload: id });
  };

  return (
    <div className='buttons-container'>
      <button onClick={() => editTask(id)}>
        <FaEdit />
      </button>
      <button onClick={() => removeTask(id)}>
        <FaTrashAlt />
      </button>
    </div>
  );
}

export default SingleTaskButtons;
