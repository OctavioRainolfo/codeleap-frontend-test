import { showMessage } from '../redux/slice/index';

export const SetNotificationState = (dispatch, payload) => {
  dispatch(showMessage(payload));
};