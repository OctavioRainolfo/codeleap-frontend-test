import { useDispatch } from 'react-redux';
import { setCareers } from '../redux/slice/index';
import { api } from './api';
import { useEffect } from 'react';

export const GetCareers = () => {

    const dispatch = useDispatch();

    const handleApiResponse = (apiResponse) => {
      dispatch(setCareers(apiResponse));
    };

    useEffect(() => {
        try {
          api.get().then((response) => {
            handleApiResponse(response.data);
          });
        } catch (error) {
          console.log(error);
        }
      }, []);
    
}