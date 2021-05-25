import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EDIT_TASK } from '../../../constants/constants';
import { deleteTaskAction } from '../../../actions/tasks';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

function SingleTaskButtons({ id }) {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.dateReducer.selectedDate);
  const userId = useSelector((state) => state.tasksReducer.userId);

  const deleteTask = (id) => {
    dispatch(deleteTaskAction(userId, selectedDate, id));
  };

  const editTask = (id) => {
    dispatch({ type: EDIT_TASK, payload: id });
  };

  return (
    <div className='buttons-container'>
      <button onClick={() => editTask(id)}>
        <FaEdit />
      </button>
      <button onClick={() => deleteTask(id)}>
        <FaTrashAlt />
      </button>
    </div>
  );
}

export default SingleTaskButtons;
