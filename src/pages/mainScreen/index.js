import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './style.css'
import trash from '../../components/assets/trash.png'
import edit from '../../components/assets/edit.png'
import { useSelector } from 'react-redux';
import { calculateTimeAgo } from '../../components/timeAgo'
import { handleChange } from '../../components/handleChange';
import { GetCareers } from '../../actions/getCareers';
import { NameChecker } from '../../components/nameChecker';

function MainScreen() {

  const [disabledButton, setDisabledButton] = useState(true);

  const [title, setTitle] = useState('');

  const [content, setContent] = useState('');

  const state = useSelector(state => state.careersContent);

  //gets the last 10 posts and set to redux state
  GetCareers();

  useEffect(() => {
    if (title.length > 0 && content.length > 0) {
      setDisabledButton(false);
    } else {
      !disabledButton && setDisabledButton(true);
    }
  }, [title, content]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  function mapPosts() {
    if (state.initialLoad) {
      return (
        state.results.map((item, index) => {
          console.log(item.username, state.username)
          return (
            <div key={index} className='postContainer'>

              <div className='content-header std-width'>
                <h1>{item.title}</h1>
                {item.username === state.username ?
                  <div className='icons-container'>
                    <img src={trash} />
                    <img src={edit} />
                  </div>
                  : null
                }

              </div>

              <div className='posts-contents std-width'>
                <div className='name-space std-width'>
                  <h2>{item.username}</h2>
                  <h2>{calculateTimeAgo(item.created_datetime)}</h2>
                </div>
                <div className='std-width'>
                  <p>
                    {item.content}
                  </p>
                </div>
              </div>


            </div>
          )
        })
      )
    }

  }

  return (
    <div className='container'>
      <div className='mainContent'>

        <div className='mainTitle'>
          <h1>CodeLeap Network</h1>
        </div>

        <div className="postContainer">
          <div className='content std-width'>
            <h1 className='std-margin'>What's on your mind?</h1>

            <div className='titleInput std-margin std-width'>
              <h2>Title</h2>
              <input onChange={handleChange(setTitle)}
                type="text" placeholder="Hello world" />
            </div>
            <div className='contentInput std-margin std-width'>
              <h2>Content</h2>
              <textarea onChange={handleChange(setContent)}
                rows="4" placeholder="Content here" />
            </div>
            <div className='create-button std-width'>
              <button disabled={disabledButton} className='create'>CREATE</button>
            </div>
          </div>
        </div>

        {mapPosts()}

      </div>


    </div>
  )
}

export default MainScreen;
