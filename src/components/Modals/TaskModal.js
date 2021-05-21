import React, { useState, useEffect } from 'react';
import { auth } from '../../Firebase/firebase';
import { addTask, saveEditedTask } from '../../actions/tasks';
import { useDispatch, useSelector } from 'react-redux';
import { CLOSE_MODAL } from '../../constants/constants';

function TaskModal() {
  const isCreateTaskOpen = useSelector(
    (state) => state.tasksReducer.isCreateTaskOpen
  );
  const isEdit = useSelector((state) => state.tasksReducer.isEdit);
  const editingTask = useSelector((state) => state.tasksReducer.editingTask);
  const selectedDate = useSelector((state) => state.dateReducer.selectedDate);

  const dispatch = useDispatch();
  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
  };

  const [taskText, setTaskText] = useState('');

  useEffect(() => {
    if (isEdit) {
      setTaskText(editingTask.text);
    }
  }, [editingTask, isEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const save = () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        if (isEdit) {
          dispatch(
            saveEditedTask(user.uid, selectedDate, editingTask.id, taskText)
          );
          setTaskText('');
        } else {
          dispatch(addTask(user.uid, selectedDate, taskText));
          setTaskText('');
        }
      }
    });
  };

  return (
    <article>
      <div
        className={`${isCreateTaskOpen ? 'overlay overlay-open' : 'overlay'}`}
        onClick={() => closeModal()}
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
            <button className='modal-button' onClick={() => closeModal()}>
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

export default TaskModal;
