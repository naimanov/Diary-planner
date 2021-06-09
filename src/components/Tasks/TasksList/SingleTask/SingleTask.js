import React from 'react';
import SingleTaskButtons from './SingleTaskButtons';
import Checkbox from './Checkbox';

function Task({ text, done, id }) {
  return (
    <article className='task-container'>
      <div className='task'>
        <Checkbox done={done} id={id} />
        <p>{text}</p>
      </div>
      <SingleTaskButtons id={id} />
    </article>
  );
}

export default Task;
