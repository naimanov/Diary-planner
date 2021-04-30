import React, { useState } from 'react';

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [tasks, setTasks] = useState([
    { id: 1, done: true, text: 'First test text' },
    { id: 2, done: true, text: 'Second test text' },
  ]);
  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editingTask, setEditingTask] = useState({});

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

  const editTask = (id) => {
    setIsEdit(true);
    const task = tasks.find((item) => String(item.id) === String(id));
    setEditingTask(task);
    createTaskOpen();
  };

  const saveTask = (taskText) => {
    if (isEdit) {
      const newTasks = tasks.map((task) => {
        if (String(task.id) === String(editingTask.id)) {
          task = { ...task, text: taskText };
        }
        return task;
      });
      setTasks(newTasks);
      setIsEdit(false);
    } else {
      addTask(taskText);
    }
    setIsCreateTaskOpen(false);
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
        editTask,
        saveTask,
        isEdit,
        editingTask,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
