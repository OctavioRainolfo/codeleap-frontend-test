import React, { useEffect, useState } from 'react'
import './style.css'
import { handleChange } from '../handleChange';
import { SetUsernameState } from '../../actions/SetUsernameState'

function SignUpModal() {

    const [disabled, setDisabled] = useState(true);

    const [name, setName] = useState('');

    useEffect(() => {
        if (name.length > 0) {
            setDisabled(false);
        } else {
            !disabled && setDisabled(true);
        }
    }, [name]);

    const handleUsername = () => {
        SetUsernameState(name);
    }

  return (
      <>
              <div className="modal">
                  <div className="modal-content">
                      <h1>Welcome to CodeLeap network!</h1>
                      <div className="modal-input" >
                          <h2>Please enter your username</h2>
                          <input onChange={(e) => {
                              handleChange(setName)(e);
                          }} type="text" placeholder="John doe"/>
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