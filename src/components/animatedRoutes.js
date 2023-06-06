import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainScreen from '../pages/mainScreen'
import SignUp from '../pages/signUp'
import NotificationContainer from './notificationContainer'

function AnimatedRoutes() {

    return (
        <AnimatePresence>
            <NotificationContainer />
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/mainScreen" element={<MainScreen />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes