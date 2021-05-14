import React from 'react';
import { useDispatch } from 'react-redux';
import { DELETE_TASK, EDIT_TASK } from '../../../constants/constants';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

function SingleTaskButtons({ id }) {
  const dispatch = useDispatch();

  const deleteTask = (id) => {
    dispatch({ type: DELETE_TASK, payload: id });
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
