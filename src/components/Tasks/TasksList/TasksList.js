import React, { useEffect } from 'react';
import SingleTask from './SingleTask/SingleTask';
import { useSelector, useDispatch } from 'react-redux';
import { GET_TASKS } from '../../../constants/constants';
import { db } from '../../../Firebase/firebase';
import { dateToString } from '../../../helpers/dateToString';

function Tasks() {
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.dateReducer.selectedDate);
  const tasks = useSelector((state) => state.tasksReducer.tasks);
  const userId = useSelector((state) => state.tasksReducer.userId);

  useEffect(() => {
    let unsubscribe;
    if (userId) {
      unsubscribe = db
        .collection('users')
        .doc(userId)
        .collection(dateToString(selectedDate))
        .onSnapshot((querySnapshot) => {
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
          dispatch({ type: GET_TASKS, payload: tasks });
        });
    }
    return unsubscribe;
  }, [selectedDate, userId]);

  if (!tasks) {
    return <div>loading...</div>;
  }

  return (
    <section>
      {tasks.map((task) => {
        return (
          <SingleTask
            key={task.id}
            text={task.text}
            done={task.done}
            id={task.id}
          />
        );
      })}
    </section>
  );
}

export default Tasks;
