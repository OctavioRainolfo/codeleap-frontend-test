import React from 'react'
import './style.css'
import { motion } from 'framer-motion'


export const BouncingModalLoader = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className='modal modal-semi-transparent'>
                <div className='boucingContainer'>

                    <div className='bouncingCircle'>
                    </div>
                    <div className='bouncingCircle bouncingCircle2'>
                    </div>
                    <div className='bouncingCircle bouncingCircle3'>
                    </div>

                    <div className='shadow'>
                    </div>
                    <div className='shadow shadow2'>
                    </div>
                    <div className='shadow shadow3'>
                    </div>

                </div>
            </div>
        </motion.div>
    )
}
