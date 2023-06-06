import React, { useEffect, useState } from 'react';
import './style.css';
import { handleChange } from '../../components/handleChange';
import { useNavigate } from 'react-router-dom';
import { SetUsernameState } from '../../actions/setUsernameState';
import { SetNotificationState } from '../../actions/setNotificationState';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import { BouncingModalLoader } from '../../components/loaderModal';

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

    const localName = localStorage.getItem('username');

    useEffect(() => {
        if (localName) {
            SetUsernameState(dispatch, localName);
            SetNotificationState(dispatch, { icon: 'success', text: 'Welcome back' });
            navigate('/mainScreen');
        }
    }, []);

    const handleUsername = () => {
        setLoader(true);
        SetUsernameState(dispatch, name);
        SetNotificationState(dispatch, { icon: 'success', text: 'Welcome to CodeLeap network!' });
        navigate('/mainScreen');
    }

    const handleEnterPress = (e) => {
        if (e.key === 'Enter') {
            handleUsername();
        }
    }

    return (

        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <>
                <div className="modal modal-standart-background">
                    <div className="modal-content signUp-modal-width">
                        <h1>Welcome to CodeLeap network!</h1>
                        <div className="modal-input" >
                            <h2>Please enter your username</h2>
                            <input
                                onKeyDown={handleEnterPress}
                                onChange={(e) => {
                                    handleChange(setName)(e);
                                }} type="text" placeholder="John doe" />
                        </div>
                        <div className='modal-button'>
                            <button
                                disabled={disabled}
                                onClick={handleUsername} className="enter-button">ENTER</button>
                        </div>
                    </div>
                </div>
                {loader ? <BouncingModalLoader /> : null}

            </>

        </motion.div>
    )
}

export default SignUpModal