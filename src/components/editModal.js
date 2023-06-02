import React, { useEffect, useState } from 'react'
import './style.css'
import { handleChange } from '../components/handleChange';

function EditModal({ show, onCancel, onConfirm, id }) {

    const [title, setTitle] = useState('');

    const [content, setContent] = useState('');

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

    const handleSave = () => {
        onConfirm(id, title, content);
    }


    return (
        <>
            {show ? (
                <div className="modal modal-semi-transparent">
                    <div className="modal-content delete-modal-width ">
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
                </div>
            )
                : null}
        </>
    )
}

export default EditModal