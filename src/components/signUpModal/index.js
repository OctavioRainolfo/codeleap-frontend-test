import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

function SignUpModal({ show }) {

    const [isVisible, setIsVisible] = useState(show);

    const [disabled, setDisabled] = useState(true);

    const [username, setUsername] = useState('');

    const navigate = useNavigate();

    function handleInputChange(value) {
        setUsername(value);
        if (value.length > 0) {
            setDisabled(false);
        } else {
            !disabled && setDisabled(true);
        }
    }

  return (
      <>
          {isVisible ? (
              <div className="modal">
                  <div className="modal-content">
                      <h1>Welcome to CodeLeap network!</h1>
                      <div className="modal-input" >
                          <h2>Please enter your username</h2>
                          <input onChange={(e) => {
                              handleInputChange(e.target.value)
                          }} type="text" placeholder="John doe"/>
                      </div>
                      <div className='modal-button'>
                          <button disabled={disabled} onClick={() => {
                              navigate('/mainScreen', { state: { username } });
                          }} className="enter-button">ENTER</button>
                      </div>
                  </div>
              </div>
          ) : null}
          
      </>
  )
}

export default SignUpModal