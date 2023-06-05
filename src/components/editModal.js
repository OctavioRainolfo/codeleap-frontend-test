import React, { useEffect, useState, useRef } from 'react'
import './style.css'
import { handleChange } from '../components/handleChange';
import ClickOutsideHandler from './ClickOutsideHandler';


function EditModal({ show, onCancel, onConfirm, id, array }) {

    const [title, setTitle] = useState('');

    const [content, setContent] = useState('');

    const modalRef = useRef(null);

    const handleSave = () => {
        onConfirm(id, title, content);
    }

    useEffect(() => {
        array.filter((item) => {
            if (item.id === id) {
                setTitle(item.title);
                setContent(item.content);
            }
        })
    }, [id])


    return (
        <>
            {show ? (
                <div ref={modalRef} className="modal modal-semi-transparent">
                        <ClickOutsideHandler onOutsideClick={onCancel}>
                        <div className="modal-content mainScreen-modal-width " >
                            <h1>Edit item</h1>

                            <div className='modal-input'>
                                <h2>Title</h2>
                                <input value={title} onChange={handleChange(setTitle)}
                                    type="text" placeholder="Hello world" />
                            </div>

                            <div className='modal-input'>
                                <h2>Content</h2>
                                <textarea value={content} onChange={handleChange(setContent)}
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