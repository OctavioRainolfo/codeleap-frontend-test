import axios from "axios";
import { setCareers } from '../redux/slice'
import { useDispatch } from "react-redux";
import { SetNotificationState } from "./setNotificationState";

export const api = axios.create({
    baseURL: "https://dev.codeleap.co.uk/careers/",
});

export const getItems = async (dispatch) => {
    await api.get().then((res) => {
        dispatch(setCareers(res.data))
    }).catch((err) => {
        console.log(err)
        SetNotificationState(dispatch, {
            text: 'Something went wrong!',
            icon: 'error'
        })
    }
    );
};

export const getNextPage = async (dispatch, nextPage, setState) => {
    await axios.get(`${nextPage}`).then((res) => {
        dispatch(setCareers(res.data))
        setState(false);
    }).catch((err) => {
        console.log(err)
        setState(false);
        SetNotificationState(dispatch, {
            text: 'Something went wrong!',
            icon: 'error'
        })
    }
    );
};

export const deleteItem = (id, setState,dispatch) => {
    console.log(id);
    api.delete(`${id}/`).then((res) => {
        console.log('deletado!');
        setState(true);
        SetNotificationState(dispatch, {
            text: 'Your post has been deleted!',
            icon: 'success'
        })
    }).catch((err) => {
        console.log(err)
        setState(true);
        SetNotificationState(dispatch, {
            text: 'Something went wrong!',
            icon: 'error'
        })
    }
    );
}

export const editItem = (id, title, content, setState,dispatch) => {
    console.log(id, title, content);
    api.patch(`${id}/`,
        {
            title: title,
            content: content
        }
    ).then((res) => {
        console.log('editado!', res.data);
        setState(true);
        SetNotificationState(dispatch, {
            text: 'Your post has been edited!',
            icon: 'success'
        })
    }
    ).catch((err) => {
        console.log(err)
        setState(true);
        SetNotificationState(dispatch, {
            text: 'Something went wrong!',
            icon: 'error'
        })
    }
    );
}

export const postItem = (username, title, content, setState,dispatch) => {
    api.post(`/`, {
        username: username,
        title: title,
        content: content
    }).then((res) => {
        console.log('postado!', res.data);
        setState(true);
        SetNotificationState(dispatch, {
            text: 'Your post has been successful!',
            icon: 'success'
        })
    }
    ).catch((err) => {
        console.log(err)
        SetNotificationState(dispatch, {
            text: 'Something went wrong!',
            icon: 'error'
        });
    }
    );
}