import React, { useState } from 'react';

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, done: true, text: 'First test text' },
    { id: 2, done: true, text: 'Second test text' },
  ]);

  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);

  const createTaskOpen = () => {
    setIsCreateTaskOpen(true);
  };

  const toggleCheckBox = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.done === true
          ? (task = { ...task, done: false })
          : (task = { ...task, done: true });
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => String(task.id) !== String(id));
    console.log(newTasks);
    setTasks(newTasks);
  };

  const clearAll = () => {
    setTasks([]);
  };

  const addTask = (text) => {
    const newTasks = [...tasks];
    const newTask = {
      id: new Date(),
      done: false,
      text: text,
    };
    newTasks.push(newTask);
    setIsCreateTaskOpen(false);
    setTasks(newTasks);
  };

  return (
    <GlobalContext.Provider
      value={{
        tasks,
        setTasks,
        toggleCheckBox,
        clearAll,
        addTask,
        isCreateTaskOpen,
        setIsCreateTaskOpen,
        createTaskOpen,
        deleteTask,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
