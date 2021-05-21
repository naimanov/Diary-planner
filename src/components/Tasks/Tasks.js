import React, { useEffect } from 'react';
import SingleTask from './SingleTask/SingleTask';
import { useSelector, useDispatch } from 'react-redux';

import { getTasks } from '../../actions/tasks';
import { auth } from '../../Firebase/firebase';

function Tasks() {
  const selectedDate = useSelector((state) => state.dateReducer.selectedDate);
  const tasks = useSelector((state) => state.tasksReducer.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(getTasks(user.uid, selectedDate));
      }
    });
  }, [selectedDate]);

  if (!tasks) {
    return null;
  }

  return (
    <div>
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
    </div>
  );
}

export default Tasks;
