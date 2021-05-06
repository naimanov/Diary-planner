import { dateToString } from '../helpers/dateToString';
import { mockData } from '../context/mockData';
import {
  GET_TASKS,
  TOGGLE_TASK_CHECKBOX,
  DELETE_TASK,
  CLEAR_ALL_TASKS,
  EDIT_TASK,
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_TASK,
  SAVE_EDITED_TASK,
} from '../constants/constants';

const defaultState = {
  tasks: null,
  isCreateTaskOpen: false,
  isEdit: false,
  editingTask: {},
};

export const tasksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_TASKS:
      const date = Object.keys(mockData).find(
        (item) => item === dateToString(new Date(Date.parse(action.payload)))
      );

      return {
        ...state,
        tasks: mockData[date],
      };

    case TOGGLE_TASK_CHECKBOX:
      const newTasks = state.tasks.map((task) => {
        if (task.id === action.payload) {
          task.done === true
            ? (task = { ...task, done: false })
            : (task = { ...task, done: true });
        }
        return task;
      });
      return { ...state, tasks: newTasks };

    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(
          (task) => String(task.id) !== String(action.payload)
        ),
      };

    case CLEAR_ALL_TASKS:
      return { ...state, tasks: null };

    case ADD_TASK:
      const newTasksArray = [...state.tasks];
      const addingTask = {
        id: new Date(),
        done: false,
        text: action.payload,
      };
      newTasksArray.push(addingTask);
      return {
        ...state,
        isCreateTaskOpen: false,
        tasks: newTasksArray,
      };

    case EDIT_TASK:
      return {
        ...state,
        isEdit: true,
        isCreateTaskOpen: true,
        editingTask: state.tasks.find(
          (item) => String(item.id) === String(action.payload)
        ),
      };

    case SAVE_EDITED_TASK:
      return {
        ...state,
        isEdit: false,
        isCreateTaskOpen: false,
        tasks: state.tasks.map((task) => {
          if (String(task.id) === String(state.editingTask.id)) {
            task = { ...task, text: action.payload };
          }
          return task;
        }),
      };

    case OPEN_MODAL:
      return { ...state, isCreateTaskOpen: true };

    case CLOSE_MODAL:
      return { ...state, isCreateTaskOpen: false };

    default:
      return state;
  }
};
