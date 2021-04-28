import React, { useContext } from 'react';
import SingleTask from './SingleTask';
import { GlobalContext } from '../../context/globalContext';

function Tasks() {
  const { tasks } = useContext(GlobalContext);
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
