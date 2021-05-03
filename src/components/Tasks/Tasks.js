import React, { useContext, useEffect } from 'react';
import SingleTask from './SingleTask';
import { GlobalContext } from '../../context/globalContext';

function Tasks() {
  const { tasks, setTasks, selectedDate, getTasks } = useContext(GlobalContext);

  useEffect(() => {
    const date = getTasks(selectedDate);
    setTasks(date);
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
