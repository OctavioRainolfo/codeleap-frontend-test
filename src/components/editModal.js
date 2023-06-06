import React, { useEffect, useState, useRef } from 'react'
import './style.css'
import { handleChange } from './handleChange';
import ClickOutsideHandler from './clickOutsideHandler';
import { motion } from 'framer-motion'
import { modalVariants } from './deleteModal';

function EditModal({ show, onCancel, onConfirm, id, array }) {

    const [title, setTitle] = useState('');

    const [content, setContent] = useState('');

    const modalRef = useRef(null);

    const handleSave = () => {
        onConfirm(id, title, content);
    }

    useEffect(() => {
        const filteredItem = array.find((item) => item.id === id);
        if (filteredItem) {
            setTitle(filteredItem.title);
            setContent(filteredItem.content);
        }
    }, [array, id])

    const handleEnterPress = (e) => {
        if (e.key === 'Enter') {
            handleSave();
        }
    }

    return (
        <>
            {show ? (
                <motion.div
                    className="modal"
                    initial="hidden"
                    animate={show ? 'visible' : 'hidden'}
                    variants={modalVariants}>
                    <ClickOutsideHandler onOutsideClick={onCancel}>
                        <div ref={modalRef} className="modal-content mainScreen-modal-width " >
                            <h1>Edit item</h1>

                            <div className='modal-input'>
                                <h2>Title</h2>
                                <input value={title} onChange={handleChange(setTitle)}
                                    type="text" placeholder="Hello world" />
                            </div>

                            <div className='modal-input'>
                                <h2>Content</h2>
                                <textarea
                                    onKeyDown={handleEnterPress}
                                    value={content} onChange={handleChange(setContent)}
                                    rows="4" placeholder="Content here" />
                            </div>

                            <div className='modal-button buttons-gap'>
                                <button onClick={onCancel} className='cancel-button'>Cancel</button>
                                <button onClick={handleSave} className="save-button">Save</button>
                            </div>
                        </div>
                    </ClickOutsideHandler>
                </motion.div>
            )
                : null}
        </>
    )
}

export default EditModal