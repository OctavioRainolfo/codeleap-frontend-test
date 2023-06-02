import React from 'react'
import { api } from '../actions/api';
import { GetCareers } from './getCareers';

function DeleteItem(id) {
    console.log(id)
    try {
        api.delete(`${id}/`).then(() => {
            console.log('deleted')
            GetCareers();
        });
        
    } catch (error) {
        console.log(error);
    }
}

export default DeleteItem