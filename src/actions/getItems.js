import { useDispatch } from 'react-redux';
import { setCareers } from '../redux/slice/index';
import { api } from './api';
import { useEffect } from 'react';

export const GetItems = () => {

  const dispatch = useDispatch();

  const getData = async () => {
    try {
      await api.get().then((response) => {
        dispatch(setCareers(response.data));
      });
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getData();
  }, []);


}