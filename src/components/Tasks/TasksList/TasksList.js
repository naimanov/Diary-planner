import React, { useEffect } from 'react';
import SingleTask from './SingleTask/SingleTask';
import Loader from '../../Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { GET_TASKS } from '../../../constants/constants';
import { db } from '../../../Firebase/firebase';
import { dateToString } from '../../../helpers/dateToString';

function Tasks() {
  const history = useHistory();
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.dateReducer.selectedDate);
  const tasks = useSelector((state) => state.tasksReducer.tasks);
  const userId = useSelector((state) => state.tasksReducer.userId);

  useEffect(() => {
    try {
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
                createdAt: obj.createdAt,
              };
              tasks.push(task);
              tasks.sort((a, b) => a.createdAt - b.createdAt);
            });
            dispatch({ type: GET_TASKS, payload: tasks });
          });
      }
      return unsubscribe;
    } catch (err) {
      history.push('error');
      console.log(err);
    }
  }, [selectedDate, userId]);

  if (!tasks) {
    return <Loader />;
  }

  return (
    <section className='tasks-list'>
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
