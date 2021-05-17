import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import firebase from 'firebase/app';
import { dateToString } from '../../helpers/dateToString';
import { useDispatch, useSelector } from 'react-redux';
import {
  CLOSE_MODAL,
  ADD_TASK,
  SAVE_EDITED_TASK,
} from '../../constants/constants';

function TaskModal() {
  const { db, userId } = useContext(AuthContext);

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

  // const save = (taskText) => {
  //   isEdit
  //     ? dispatch({ type: SAVE_EDITED_TASK, payload: taskText })
  //     : dispatch({ type: ADD_TASK, payload: taskText });
  //   setTaskText('');
  // };

  const save = (taskText) => {
    db.collection('users').doc(userId).set({ name: 'user' });

    db.collection('users')
      .doc(userId)
      .collection(dateToString(selectedDate))
      .add({
        tasks: { done: true, text: taskText },
      });
  };

  const read = () => {
    // db.collection('users')
    //   .doc(userId)
    //   .onSnapshot((doc) => {
    //     console.log(doc.data());
    //   });
    db.collection('users')
      .doc(userId)
      .collection(dateToString(selectedDate))
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const obj = doc.data().tasks;
          const task = {
            id: doc.id,
            done: obj.done,
            text: obj.text,
          };

          console.log(task);
        });
      });

    // Checking is user exist
    // db.collection('users')
    //   .doc('userId')
    //   .get()
    //   .then((doc) => {
    //     console.log(doc.data());
    //   });
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
            <button className='modal-button' onClick={read}>
              Read
            </button>
          </div>
        </form>
      </div>
    </article>
  );
}

export default TaskModal;
