import React from 'react';
import { useDispatch } from 'react-redux';
import { TOGGLE_TASK_CHECKBOX } from '../../constants/constants';
import SingleTaskButtons from './SingleTaskButtons';

function Task({ text, done, id }) {
  const dispatch = useDispatch();

  const toggleCheckBox = (id) => {
    dispatch({ type: TOGGLE_TASK_CHECKBOX, payload: id });
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
