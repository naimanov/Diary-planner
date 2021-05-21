import { GET_USER_ID } from '../constants/constants';

const defaultState = {
  userId: '',
};

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case GET_USER_ID:
      return { ...state, userId: action.payload };
    default:
      return defaultState;
  }
};
