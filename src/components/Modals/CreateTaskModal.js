import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../../context/globalContext';

function CreateTaskModal() {
  const { isCreateTaskOpen, setIsCreateTaskOpen, addTask } = useContext(
    GlobalContext
  );

  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const save = (taskText) => {
    addTask(taskText);
    setTaskText('');
  };

  return (
    <article>
      <div
        className={`${isCreateTaskOpen ? 'overlay overlay-open' : 'overlay'}`}
        onClick={() => setIsCreateTaskOpen(false)}
      ></div>
      <div className={`${isCreateTaskOpen ? 'modal modal-open' : 'modal'}`}>
        <form className='create-task' onSubmit={handleSubmit}>
          <input
            className='modal-input'
            placeholder='Внесите заметку'
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <div className='buttons-container'>
            <button
              className='modal-button'
              onClick={() => setIsCreateTaskOpen(false)}
            >
              Cancel
            </button>
            <button className='modal-button' onClick={() => save(taskText)}>
              Save
            </button>
          </div>
        </form>
      </div>
    </article>
  );
}

export default CreateTaskModal;
