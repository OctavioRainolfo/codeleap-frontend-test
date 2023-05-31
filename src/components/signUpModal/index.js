import React, { useState } from 'react'
import './style.css'

function SignUpModal({ show, onClose, children }) {

    const [isVisible, setIsVisible] = useState(show);

    const onCloseModal = () => {
        setIsVisible(false);
        onClose();
    }

  return (
      <>
          {isVisible ? (
              <div className="modal">
                  <div className="modal-content">
                      <h1>Welcome to CodeLeap network!</h1>
                      <div className="modal-input" >
                          <h2>Please enter your username</h2>
                          <input type="text" placeholder="John doe"/>
                      </div>
                      <div className='modal-button'>
                          <button className='enter-button'>ENTER</button>
                      </div>
                  </div>
              </div>
          ) : null}
          
      </>
  )
}

export default SignUpModal