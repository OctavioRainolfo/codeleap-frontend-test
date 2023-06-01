import { useDispatch } from 'react-redux';
import { setUsername } from '../redux/slice/index';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';


export const SetUsernameState = (payload) => {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    console.log("entrou");

    useEffect(() => {
        dispatch(setUsername(payload));
        navigate('/mainScreen');
    }
        , []);

}