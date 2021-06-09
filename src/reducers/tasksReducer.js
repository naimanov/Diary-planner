import {
  GET_TASKS,
  EDIT_TASK,
  OPEN_MODAL,
  CLOSE_MODAL,
  ADD_TASK,
  SAVE_EDITED_TASK,
  GET_USER_ID,
} from '../constants/constants';

const defaultState = {
  userId: null,
  tasks: null,
  isCreateTaskOpen: false,
  isEdit: false,
  editingTask: {},
};

export const tasksReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USER_ID:
      return { ...state, userId: action.payload };

    case GET_TASKS:
      return {
        ...state,
        tasks: action.payload,
      };

    case ADD_TASK:
      return {
        ...state,
        isCreateTaskOpen: false,
      };

    case SAVE_EDITED_TASK:
      return {
        ...state,
        isEdit: false,
        isCreateTaskOpen: false,
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

    case OPEN_MODAL:
      return { ...state, isCreateTaskOpen: true };

    case CLOSE_MODAL:
      return { ...state, isCreateTaskOpen: false };

    default:
      return state;
  }
};
