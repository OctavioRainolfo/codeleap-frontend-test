import { api } from '../actions/api';
import { GetItems } from './getItems';
import { useEffect } from 'react';

async function PostItem(username, title, content, toggleModal) {
    console.log(username, title, content)

    try {
       await api.post(`/`, {
            username: username,
            title: title,
            content: content
        }).then((res) => {
            console.log('postado!', res.data);
            toggleModal();
            console.log("togaddo")
        });

    } catch (error) {
        console.log(error);
    }

   
}

export default PostItem