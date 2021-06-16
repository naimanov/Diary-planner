import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { toogleTaskCheckBox } from '../../../../Firebase/db';

import { FaCheck } from 'react-icons/fa';

function Checkbox({ done, id }) {
  const history = useHistory();
  const selectedDate = useSelector((state) => state.dateReducer.selectedDate);
  const userId = useSelector((state) => state.tasksReducer.userId);

  const toggleCheckBox = (id) => {
    try {
      toogleTaskCheckBox(userId, selectedDate, id, done);
    } catch (err) {
      history.push('/error');
      console.log(err);
    }
  };

  return (
    <div className='check-box ' onClick={() => toggleCheckBox(id)}>
      <FaCheck
        className={`${done ? 'check-mark check-mark-done' : 'check-mark'}`}
      />
    </div>
  );
}

export default Checkbox;
