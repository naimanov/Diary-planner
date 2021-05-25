import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleTaskButtons from './SingleTaskButtons';
import { toogleTaskCheckBox } from '../../../actions/tasks';

function Task({ text, done, id }) {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.dateReducer.selectedDate);
  const userId = useSelector((state) => state.tasksReducer.userId);

  const toggleCheckBox = (id) => {
    dispatch(toogleTaskCheckBox(userId, selectedDate, id, done));
  };

  return (
    <article>
      <div className='task-container'>
        <div className='task'>
          <div
            className={`${
              done === true ? 'check-box check-box-done' : 'check-box'
            }`}
            onClick={() => toggleCheckBox(id)}
          ></div>
          <p>{text}</p>
        </div>

        <SingleTaskButtons id={id} />
      </div>
    </article>
  );
}

export default Task;
