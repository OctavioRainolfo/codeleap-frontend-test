import React, {useEffect} from 'react'
import './style.css'

function DeleteModal({ show, onCancel, onConfirm }) {
    
    const handleClickOutside = (e) => {
        if (e.target.className === 'modal modal-semi-transparent') {
            onCancel();
        }
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }
    }, [])


    return (
        <>
            {show ? (
                <div className="modal modal-semi-transparent">
                    <div className="modal-content delete-modal-width content-gap">
                        <h1>Are you sure you want to delete this item?</h1>

                        <div className='modal-button buttons-gap'>
                            <button onClick={onCancel} className='cancel-button'>Cancel</button>
                            <button onClick={onConfirm} className="delete-button">Delete</button>
                        </div>
                    </div>
                </div>
            )
                : null}
        </>
    )
}

export default DeleteModal