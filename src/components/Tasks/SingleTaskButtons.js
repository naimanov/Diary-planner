import React, { useContext } from 'react';
import { GlobalContext } from '../../context/globalContext';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

function SingleTaskButtons({ id }) {
  const { deleteTask, editTask } = useContext(GlobalContext);
  return (
    <div className='buttons-container'>
      <button>
        <FaEdit onClick={() => editTask(id)} />
      </button>
      <button onClick={() => deleteTask(id)}>
        <FaTrashAlt />
      </button>
    </div>
  );
}

export default SingleTaskButtons;
