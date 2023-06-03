import React, { useEffect, useState, useRef } from 'react'
import './style.css'
import { handleChange } from '../components/handleChange';
import ClickOutsideHandler from './ClickOutsideHandler';


function EditModal({ show, onCancel, onConfirm, id }) {

    const [title, setTitle] = useState('');

    const [content, setContent] = useState('');

    const modalRef = useRef(null);

    const handleSave = () => {
        onConfirm(id, title, content);
    }


    return (
        <>
            {show ? (
                <div ref={modalRef} className="modal modal-semi-transparent">
                        <ClickOutsideHandler onOutsideClick={onCancel}>
                        <div className="modal-content delete-modal-width " >
                            <h1>Edit item</h1>

                            <div className='modal-input'>
                                <h2>Title</h2>
                                <input onChange={handleChange(setTitle)}
                                    type="text" placeholder="Hello world" />
                            </div>

                            <div className='modal-input'>
                                <h2>Content</h2>
                                <textarea onChange={handleChange(setContent)}
                                    rows="4" placeholder="Content here" />
                            </div>

                            <div className='modal-button buttons-gap'>
                                <button onClick={onCancel} className='cancel-button'>Cancel</button>
                                <button onClick={handleSave} className="save-button">Save</button>
                            </div>
                        </div>
                    </ClickOutsideHandler>
                    </div>
                    )
                : null}
                </>
            )
}

            export default EditModal