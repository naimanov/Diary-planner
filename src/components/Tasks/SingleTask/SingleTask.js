import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SingleTaskButtons from './SingleTaskButtons';
import { auth } from '../../../Firebase/firebase';
import { toogleTaskCheckBox } from '../../../actions/tasks';

function Task({ text, done, id }) {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.dateReducer.selectedDate);

  const toggleCheckBox = (id) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(toogleTaskCheckBox(user.uid, selectedDate, id, done));
      }
    });
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
