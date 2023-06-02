import { api } from '../actions/api';
import { GetCareers } from './getCareers';

function PostItem(username, title, content) {
    console.log(username, title, content)
    try {
        api.post(`/`,{
            username: username,
            title: title,
            content: content
        }).then((res) => {
            console.log('postado!',res.data);
        });
        
    } catch (error) {
        console.log(error);
    }
}

export default PostItem