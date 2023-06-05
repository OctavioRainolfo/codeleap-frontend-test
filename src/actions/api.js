import axios from "axios";
import { setCareers } from '../redux/slice'

export const api = axios.create({
    baseURL: "https://dev.codeleap.co.uk/careers/",
});

export const getItems = async (dispatch) => {
    await api.get().then((res) => {
        dispatch(setCareers(res.data))
    }).catch((err) => {
        console.log(err)
    }
    );
};

export const deleteItem = (id) => {
    api.delete(`${id}/`);
}

export const editItem = (id, title, content) => {
    api.patch(`${id}/`,
        {
            title: title,
            content: content
        }
    ).then((res) => {
        console.log('editado!', res.data);
    }
    );
}

export const postItem = (username, title, content, setState) => {
    api.post(`/`, {
        username: username,
        title: title,
        content: content
    }).then((res) => {
        console.log('postado!', res.data);
        setState(true);
    }
    );
}