import {
  GET_TASKS,
  ADD_TASK,
  SAVE_EDITED_TASK,
  DELETE_TASK,
  TOGGLE_TASK_CHECKBOX,
  CLEAR_ALL_TASKS,
} from '../constants/constants';
import { db } from '../Firebase/firebase';
import { dateToString } from '../helpers/dateToString';

const getDocRef = (userId, selectedDate) => {
  const docRef = db
    .collection('users')
    .doc(userId)
    .collection(dateToString(selectedDate));
  return docRef;
};

const getTaskRef = (userId, selectedDate, docId) => {
  const docRef = db
    .collection('users')
    .doc(userId)
    .collection(dateToString(selectedDate))
    .doc(docId);
  return docRef;
};

const fetchTasks = (userId, selectedDate) => {
  const docRef = getDocRef(userId, selectedDate);
  return docRef.get().then((querySnapshot) => {
    const tasks = [];
    querySnapshot.forEach((doc) => {
      const obj = doc.data();
      const task = {
        id: doc.id,
        done: obj.done,
        text: obj.text,
      };
      tasks.push(task);
    });
    return tasks;
  });
};

export const getTasks = (userId, selectedDate) => {
  return (dispatch) => {
    fetchTasks(userId, selectedDate).then((tasks) => {
      dispatch({ type: GET_TASKS, payload: tasks });
    });
  };
};

export const addTask = (userId, selectedDate, text) => {
  return (dispatch) => {
    getDocRef(userId, selectedDate)
      .add({ done: false, text: text })
      .then(() => fetchTasks(userId, selectedDate))
      .then((tasks) => {
        dispatch({ type: ADD_TASK, payload: tasks });
      });
  };
};

export const saveEditedTask = (userId, selectedDate, docId, newText) => {
  return (dispatch) => {
    getTaskRef(userId, selectedDate, docId)
      .update({ text: newText })
      .then(() => fetchTasks(userId, selectedDate))
      .then((tasks) => {
        dispatch({ type: SAVE_EDITED_TASK, payload: tasks });
      });
  };
};

export const deleteTaskAction = (userId, selectedDate, docId) => {
  return (dispatch) => {
    getTaskRef(userId, selectedDate, docId)
      .delete()
      .then(() => fetchTasks(userId, selectedDate))
      .then((tasks) => {
        dispatch({ type: DELETE_TASK, payload: tasks });
      });
  };
};

export const toogleTaskCheckBox = (userId, selectedDate, docId, done) => {
  return (dispatch) => {
    getTaskRef(userId, selectedDate, docId)
      .update({ done: !done })
      .then(() => fetchTasks(userId, selectedDate))
      .then((tasks) => {
        dispatch({ type: TOGGLE_TASK_CHECKBOX, payload: tasks });
      });
  };
};

export const clearAllTasks = (userId, selectedDate) => {
  const docRef = getDocRef(userId, selectedDate);
  docRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      doc.ref.delete();
    });
  });
  return { type: CLEAR_ALL_TASKS };
};
