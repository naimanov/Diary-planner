import {
  GET_CALENDAR_DAYS,
  GET_PREV_MONTH,
  GET_NEXT_MONTH,
  SET_CALENDAR_DATE,
} from '../constants/constants';

const defaultState = {
  calendarDate: new Date(),
  calendarDays: [],
  isLoading: true,
};

export const calendarReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_CALENDAR_DAYS:
      return { ...state, calendarDays: action.payload, isLoading: false };

    case SET_CALENDAR_DATE:
      return { ...state, calendarDate: action.payload };

    case GET_PREV_MONTH:
      const prevMonthDate = state.calendarDate.setMonth(
        state.calendarDate.getMonth() - 1
      );
      return {
        ...state,
        calendarDate: new Date(prevMonthDate),
      };

    case GET_NEXT_MONTH:
      const nextMonthDate = state.calendarDate.setMonth(
        state.calendarDate.getMonth() + 1
      );
      return {
        ...state,
        calendarDate: new Date(nextMonthDate),
      };

    default:
      return state;
  }
};
