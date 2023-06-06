import { setNotification, showMessage } from '../redux/slice/index';

export const SetNotificationState = (dispatch, payload) => {
    console.log(payload)
  dispatch(showMessage(payload));
};