import React, { useContext } from 'react';
import { GlobalContext } from '../../context/globalContext';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

function SingleTaskButtons({ id }) {
  const { deleteTask } = useContext(GlobalContext);
  return (
    <div className='buttons-container'>
      <button>
        <FaEdit />
      </button>
      <button onClick={() => deleteTask(id)}>
        <FaTrashAlt />
      </button>
    </div>
  );
}

export default SingleTaskButtons;
