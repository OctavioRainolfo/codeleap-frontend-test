import { setUsername } from '../redux/slice/index';

export const SetUsernameState = (dispatch, payload) => {
  dispatch(setUsername(payload));
  localStorage.setItem('username', payload);
};