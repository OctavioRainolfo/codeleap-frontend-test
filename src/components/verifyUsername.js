import React from 'react'

function VerifyUsername(username, navigate) {

    if (!username) {
        navigate('/');
    }
}

export default VerifyUsername