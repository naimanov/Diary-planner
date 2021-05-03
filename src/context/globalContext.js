import React, { useState, useEffect } from 'react';
import { getCurrentDate } from '../helpers/getCurrentDate';
import { mockData } from './mockData';
import { dateToString } from '../helpers/dateToString';

const GlobalContext = React.createContext();

const GlobalProvider = ({ children }) => {
  const [tasks, setTasks] = useState(null);

  const [isCreateTaskOpen, setIsCreateTaskOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editingTask, setEditingTask] = useState({});
  const [selectedDate, setSelectedDate] = useState(new Date());

  const getTasks = (date) => {
    const data = Object.keys(mockData).find(
      (item) => item === dateToString(date)
    );

    return mockData[data];
  };

  const prevDate = () => {
    const date = selectedDate.setDate(selectedDate.getDate() - 1);
    setSelectedDate(new Date(date));
  };

  const nextDate = () => {
    const date = selectedDate.setDate(selectedDate.getDate() + 1);
    setSelectedDate(new Date(date));
  };

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
        setSelectedDate,
        selectedDate,
        prevDate,
        nextDate,
        getTasks,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
