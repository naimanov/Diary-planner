import React from 'react';
import { useSelector } from 'react-redux';
import { toogleTaskCheckBox } from '../../../../Firebase/db';

function Checkbox({ done, id }) {
  const selectedDate = useSelector((state) => state.dateReducer.selectedDate);
  const userId = useSelector((state) => state.tasksReducer.userId);

  const toggleCheckBox = (id) => {
    toogleTaskCheckBox(userId, selectedDate, id, done);
  };

  return (
    <div
      className={`${done === true ? 'check-box check-box-done' : 'check-box'}`}
      onClick={() => toggleCheckBox(id)}
    ></div>
  );
}

export default Checkbox;
