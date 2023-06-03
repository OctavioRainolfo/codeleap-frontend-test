import React, { useEffect } from 'react'
import './style.css'
import ClickOutsideHandler from './ClickOutsideHandler';

function DeleteModal({ show, onCancel, onConfirm }) {

    return (
        <>
            {show ? (
                <div className="modal modal-semi-transparent">
                    <ClickOutsideHandler onOutsideClick={onCancel}>
                        <div className="modal-content mainScreen-modal-width content-gap">
                            <h1>Are you sure you want to delete this item?</h1>

                            <div className='modal-button buttons-gap'>
                                <button onClick={onCancel} className='cancel-button'>Cancel</button>
                                <button onClick={onConfirm} className="delete-button">Delete</button>
                            </div>
                        </div>
                    </ClickOutsideHandler>
                </div>
            )
                : null}
        </>
    )
}

export default DeleteModal