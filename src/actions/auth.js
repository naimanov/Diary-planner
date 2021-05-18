import { GET_USER_ID } from '../constants/constants';

export const getUserId = (payload) => {
  return {
    type: GET_USER_ID,
    payload,
  };
};
