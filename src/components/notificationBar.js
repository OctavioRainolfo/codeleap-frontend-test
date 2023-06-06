import React from 'react'
import './style.css'

function NotificationBar(props) {

    const handleType = props.iconType === 'success' ?
        'notification success' : 'notification error'
    
    const handleProgress = props.iconType === 'success' ?
        'notification-progress notification-progress-success' : 'notification-progress notification-progress-error'
    
    
    return (
        <div className='notification-container'>
            <figure className={handleType}>
                <div className='notification-body'>
                    <img src={props.icon} alt="" className='notification-icon' />
                    {props.text}
                </div>
                <div className={handleProgress}></div>
            </figure>
        </div>
    )
}

export default NotificationBar