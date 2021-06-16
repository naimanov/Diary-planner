import React, { useState, useEffect } from 'react';
import { addTask, saveEditedTask } from '../../Firebase/db';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  CLOSE_MODAL,
  ADD_TASK,
  SAVE_EDITED_TASK,
} from '../../constants/constants';

function TaskModal() {
  const history = useHistory();
  const [taskText, setTaskText] = useState('');

  const isEdit = useSelector((state) => state.tasksReducer.isEdit);
  const editingTask = useSelector((state) => state.tasksReducer.editingTask);
  const selectedDate = useSelector((state) => state.dateReducer.selectedDate);
  const userId = useSelector((state) => state.tasksReducer.userId);
  const isCreateTaskOpen = useSelector(
    (state) => state.tasksReducer.isCreateTaskOpen
  );

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL });
    setTaskText('');
  };

  useEffect(() => {
    if (isCreateTaskOpen) {
      document.getElementById('modal-input').focus();
    }
  }, [isCreateTaskOpen]);

  useEffect(() => {
    if (isEdit) {
      setTaskText(editingTask.text);
    }
  }, [editingTask, isEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const save = () => {
    try {
      if (isEdit) {
        saveEditedTask(userId, selectedDate, editingTask.id, taskText);
        dispatch({ type: SAVE_EDITED_TASK });
        setTaskText('');
      } else {
        addTask(userId, selectedDate, taskText);
        dispatch({ type: ADD_TASK });
        setTaskText('');
      }
    } catch (err) {
      history.push('/error');
      console.log(err);
    }
  };

  const onKeyDownHandler = (e) => {
    switch (e.key) {
      case 'Enter':
        save(taskText);
        break;
      case 'Escape':
        closeModal();
        break;
      default:
        break;
    }
  };

  return (
    <article className='modal-wrapper'>
      <div
        className={`${isCreateTaskOpen ? 'overlay overlay-open' : 'overlay'}`}
        onClick={() => closeModal()}
      ></div>
      <div className='modal-wrapper'></div>
      <div className={`${isCreateTaskOpen ? 'modal modal-open' : 'modal'}`}>
        <form
          className='create-task'
          onSubmit={handleSubmit}
          onKeyDown={(e) => onKeyDownHandler(e)}
        >
          <input
            id='modal-input'
            className='modal-input'
            placeholder='Внесите заметку'
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <div className='buttons-container'>
            <button className='modal-button' onClick={() => closeModal()}>
              Отмена
            </button>
            <button className='modal-button' onClick={() => save(taskText)}>
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </article>
  );
}

export default TaskModal;
