import React from 'react';
import { auth } from '../../../Firebase/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { EDIT_TASK } from '../../../constants/constants';
import { deleteTaskAction, getTasks } from '../../../actions/tasks';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

function SingleTaskButtons({ id }) {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.dateReducer.selectedDate);

  const deleteTask = (id) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(deleteTaskAction(user.uid, selectedDate, id));
      }
    });
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
