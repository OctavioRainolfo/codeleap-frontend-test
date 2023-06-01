import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './style.css'
import trash from '../../components/assets/trash.png'
import edit from '../../components/assets/edit.png'

function MainScreen() {
  const [disabled, setDisabled] = useState(true);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const location = useLocation();
  const { state } = location;

  const username = state?.username;

  const handleChange = (setState) => (event) => {
    setState(event.target.value);
  };

  useEffect(() => {
    if (title.length > 0 && content.length > 0) {
      setDisabled(false);
    } else {
      !disabled && setDisabled(true);
    }
  }, [title, content]);

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
              <button disabled={disabled} className='create'>CREATE</button>
            </div>
          </div>
        </div>

        <div className='postContainer'>

          <div className='content-header std-width'>
            <h1>posts</h1>
            <div className='icons-container'>
              <img src={trash} />
              <img src={edit} />
            </div>

          </div>

          <div className='posts-contents std-width'>
            <div className='name-space std-width'>
              <h2>@name</h2>
              <h2>x time ago</h2>
            </div>
            <div className='std-width'>
              <p>
              Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula mattis placerat. Duis vel nibh at velit scelerisque suscipit.

Duis lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
              </p>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default MainScreen;
