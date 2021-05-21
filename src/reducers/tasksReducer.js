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
      return {
        ...state,
        tasks: action.payload,
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: action.payload,
        isCreateTaskOpen: false,
      };

    case SAVE_EDITED_TASK:
      return {
        ...state,
        tasks: action.payload,
        isEdit: false,
        isCreateTaskOpen: false,
      };

    case DELETE_TASK:
      return {
        ...state,
        tasks: action.payload,
      };

    case TOGGLE_TASK_CHECKBOX:
      return { ...state, tasks: action.payload };

    case CLEAR_ALL_TASKS:
      return { ...state, tasks: null };

    case EDIT_TASK:
      return {
        ...state,
        isEdit: true,
        isCreateTaskOpen: true,
        editingTask: state.tasks.find(
          (item) => String(item.id) === String(action.payload)
        ),
      };

    case OPEN_MODAL:
      return { ...state, isCreateTaskOpen: true };

    case CLOSE_MODAL:
      return { ...state, isCreateTaskOpen: false };

    default:
      return state;
  }
};
