import React from 'react';
import { useSelector } from 'react-redux';
import { toogleTaskCheckBox } from '../../../../Firebase/db';
import { useHistory } from 'react-router-dom';

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
    <div
      className={`${done === true ? 'check-box check-box-done' : 'check-box'}`}
      onClick={() => toggleCheckBox(id)}
    ></div>
  );
}

export default Checkbox;
