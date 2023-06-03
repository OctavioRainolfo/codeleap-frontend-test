import React, { useEffect, useState } from 'react';
import './style.css';
import { handleChange } from './handleChange';
import { useNavigate } from 'react-router-dom';
import { SetUsernameState } from '../actions/setUsernameState';
import { useDispatch } from 'react-redux';

function SignUpModal() {

    const [disabled, setDisabled] = useState(true);

    const [loader, setLoader] = useState(false);

    const dispatch = useDispatch();

    const [name, setName] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (name.length > 0) {
            setDisabled(false);
        } else {
            !disabled && setDisabled(true);
        }
    }, [name]);

    const handleUsername = () => {
        setLoader(true);
        SetUsernameState(dispatch, name);
        navigate('/mainScreen');
    }

    return (
        <>
            <div className="modal modal-standart-background">
                <div className="modal-content signUp-modal-width">
                    <h1>Welcome to CodeLeap network!</h1>
                    <div className="modal-input" >
                        <h2>Please enter your username</h2>
                        <input onChange={(e) => {
                            handleChange(setName)(e);
                        }} type="text" placeholder="John doe" />
                    </div>
                    <div className='modal-button'>
                        <button disabled={disabled} onClick={handleUsername} className="enter-button">ENTER</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignUpModal