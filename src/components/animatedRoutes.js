import { AnimatePresence } from 'framer-motion'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainScreen from '../pages/mainScreen'
import SignUp from '../pages/signUp'


function AnimatedRoutes() {
    return (
        <AnimatePresence >
            <Routes>
                <Route path="/" element={<SignUp />} />
                <Route path="/mainScreen" element={<MainScreen />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes