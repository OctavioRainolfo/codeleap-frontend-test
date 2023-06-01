import React from 'react'
import { useLocation } from 'react-router-dom';
import './style.css'

function MainScreen() {

  const location = useLocation();
  const { state } = location;

  const username = state?.username;
  console.log(username)

  return (
    <div className='container'>
        <div className='mainHeader'>
          <h2>CodeLeap Network</h2>
        </div>
      <div className='main-screen'>

        <div className='postContainer'>
          <h1>What's on your mind?</h1>

          <div className='titleInput'>
            <h2>Title</h2>
            <input type="text" placeholder="Hello world" />
          </div>
          <div className='contentInput'>
            <h2>Content</h2>
            <textarea placeholder="Content here" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainScreen