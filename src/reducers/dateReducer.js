import {
  SET_SELECTED_DATE,
  SET_NEXT_DATE,
  SET_PREV_DATE,
  SET_CURRENT_DATE,
} from '../constants/constants';

const defaultState = {
  selectedDate: new Date(),
};

export const dateReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_SELECTED_DATE:
      return { ...state, selectedDate: action.payload };

    case SET_PREV_DATE:
      const prevDate = state.selectedDate.setDate(
        state.selectedDate.getDate() - 1
      );
      return {
        ...state,
        selectedDate: new Date(prevDate),
      };

    case SET_NEXT_DATE:
      const nextDate = state.selectedDate.setDate(
        state.selectedDate.getDate() + 1
      );
      return {
        ...state,
        selectedDate: new Date(nextDate),
      };

    case SET_CURRENT_DATE:
      return {
        ...state,
        selectedDate: new Date(),
      };
    default:
      return state;
  }
};
