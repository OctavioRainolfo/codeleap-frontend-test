import React from 'react'
import './style.css'


function BouncingModalLoader() {
    return (
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
    )
}

export default BouncingModalLoader