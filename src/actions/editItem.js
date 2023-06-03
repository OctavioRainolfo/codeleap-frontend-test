import { api } from '../actions/api';
import { GetItems } from './getItems';

function EditItem(id, title, content, closeLoader) {
    console.log(id, title, content)
    try {
        api.patch(`${id}/`,
            {
                title: title,
                content: content
            }
        ).then(() => {
            console.log('edited')
            closeLoader();
        });

    } catch (error) {
        console.log(error);
    }
}

export default EditItem