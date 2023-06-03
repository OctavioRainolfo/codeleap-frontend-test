import { api } from '../actions/api';
import { GetCareers } from './getCareers';

function EditItem(id, title, content) {
    console.log(id, title, content)
    try {
        api.patch(`${id}/`,
            {
                title: title,
                content: content
            }
        ).then(() => {
            console.log('edited')
        });

    } catch (error) {
        console.log(error);
    }
}

export default EditItem