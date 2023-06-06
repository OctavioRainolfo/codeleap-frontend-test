import React from 'react';
import './style.css';
import { motion, AnimatePresence } from 'framer-motion';
import ClickOutsideHandler from './clickOutsideHandler';

export const modalVariants = {
    hidden: {
        opacity: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.0)',
        transition: { duration: 0.4 },
    },
    visible: {
        opacity: 1,
        backgroundColor: 'var(--modalBG-color)',
        transition: { duration: 0.2 },
    },
};

function DeleteModal({ show, onCancel, onConfirm }) {

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="modal"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={modalVariants}
                >
                    <ClickOutsideHandler onOutsideClick={onCancel}>
                        <div className="modal-content mainScreen-modal-width content-gap">
                            <h1>Are you sure you want to delete this item?</h1>

                            <div className="modal-button buttons-gap">
                                <button onClick={onCancel} className="cancel-button">
                                    Cancel
                                </button>
                                <button
                                    onClick={onConfirm} className="delete-button">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </ClickOutsideHandler>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default DeleteModal;
