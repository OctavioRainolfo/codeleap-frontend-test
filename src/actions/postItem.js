import { api } from '../actions/api';
import { getItems } from './getItems';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

async function PostItem(username, title, content, callback) {
    console.log(username, title, content)
    
    try {
        await api.post(`/`, {
            username: username,
            title: title,
            content: content
        }).then((res) => {
            console.log('postado!', res.data);
            callback();
        });

    } catch (error) {
        console.log(error);
    }


}

export default PostItem