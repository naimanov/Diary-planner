import React, { useContext } from 'react';
import { GlobalContext } from '../../context/globalContext';
import SingleTaskButtons from './SingleTaskButtons';

function Task({ text, done, id }) {
  const { toggleCheckBox } = useContext(GlobalContext);
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
