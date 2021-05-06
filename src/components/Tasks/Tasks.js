import React, { useEffect } from 'react';
import SingleTask from './SingleTask';
import { useSelector, useDispatch } from 'react-redux';
import { GET_TASKS } from '../../constants/constants';

function Tasks() {
  const selectedDate = useSelector((state) => state.dateReducer.selectedDate);
  const tasks = useSelector((state) => state.tasksReducer.tasks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_TASKS, payload: selectedDate });
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
