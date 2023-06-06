import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import NotificationBar from './notificationBar'
import yes from './assets/yes.png'
import error from './assets/error.png'
import DispatchHideMessage from '../actions/dispatchHideMessage';

const NotificationContainer = () => {

    const showNotification = useSelector((state) => state.careersContent.notification.showNotification);

    const message = useSelector((state) => state.careersContent.notification.message);

    const iconType = useSelector((state) => state.careersContent.notification.icon);

    const icon = iconType === 'success' ? yes : error;

    const dispatch = useDispatch();

    useEffect(() => {
        if (showNotification) {
            setTimeout(() => {
                DispatchHideMessage(dispatch);
            }, 3000);
        }
    }, [showNotification]);

    return (
        <div>
            {showNotification && (
                <NotificationBar icon={icon} text={message} iconType={iconType} />
            )}
        </div>
    );
};

export default NotificationContainer;
