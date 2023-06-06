import { setLogout } from '../redux/slice/index';

export const SetLogout = (dispatch) => {
    dispatch(setLogout);
    localStorage.removeItem('username');
};