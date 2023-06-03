import React from 'react'
import { api } from '../actions/api';
import { GetItems } from './getItems';

function DeleteItem(id, closeLoader) {
    console.log(id)
    try {
        api.delete(`${id}/`).then(() => {
            console.log('deleted')
            closeLoader();
        });
        
    } catch (error) {
        console.log(error);
    }
}

export default DeleteItem