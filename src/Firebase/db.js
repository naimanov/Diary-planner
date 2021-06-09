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

export const addTask = (userId, selectedDate, text) => {
  getDocRef(userId, selectedDate).add({ done: false, text: text });
};

export const saveEditedTask = (userId, selectedDate, docId, newText) => {
  getTaskRef(userId, selectedDate, docId).update({ text: newText });
};

export const deleteTask = (userId, selectedDate, docId) => {
  getTaskRef(userId, selectedDate, docId).delete();
};

export const toogleTaskCheckBox = (userId, selectedDate, docId, done) => {
  getTaskRef(userId, selectedDate, docId).update({ done: !done });
};

export const clearAllTasks = (userId, selectedDate) => {
  const docRef = getDocRef(userId, selectedDate);
  docRef.get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      doc.ref.delete();
    });
  });
};
