import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'
import { handleChange } from '../handleChange';

function SignUpModal() {

    const [disabled, setDisabled] = useState(true);

    const [username, setUsername] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (username.length > 0) {
            setDisabled(false);
        } else {
            !disabled && setDisabled(true);
        }
    }, [username]);

  return (
      <>
              <div className="modal">
                  <div className="modal-content">
                      <h1>Welcome to CodeLeap network!</h1>
                      <div className="modal-input" >
                          <h2>Please enter your username</h2>
                          <input onChange={(e) => {
                              handleChange(setUsername)(e);
                          }} type="text" placeholder="John doe"/>
                      </div>
                      <div className='modal-button'>
                          <button disabled={disabled} onClick={() => {
                              navigate('/mainScreen', { state: { username } });
                          }} className="enter-button">ENTER</button>
                      </div>
                  </div>
              </div>
          
      </>
  )
}

export default SignUpModal