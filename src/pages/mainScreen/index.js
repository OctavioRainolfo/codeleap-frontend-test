import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './style.css'
import trash from '../../components/assets/trash.png'
import edit from '../../components/assets/edit.png'
import { api } from '../../actions/api';
import { useSelector, useDispatch } from 'react-redux';
import { setCareers } from '../../redux/slice/index';
import { calculateTimeAgo } from '../../components/timeAgo'
import { handleChange } from '../../components/handleChange';

function MainScreen() {

  const [disabled, setDisabled] = useState(true);

  const [title, setTitle] = useState('');

  const [content, setContent] = useState('');

  const location = useLocation();

  const { usernameState } = location;

  const username = usernameState?.username;

  const dispatch = useDispatch();

  const state = useSelector(state => state.setCareers);

  const handleApiResponse = (apiResponse) => {
    dispatch(setCareers(apiResponse));
  };

  function getCareers() {
    api.get().then((response) => {
      console.log(response.data);
      handleApiResponse(response.data);
    }
    ).catch((error) => {
      console.log(error);
    }
    );
  }

  useEffect(() => {
    if (title.length > 0 && content.length > 0) {
      setDisabled(false);
    } else {
      !disabled && setDisabled(true);
    }
  }, [title, content]);

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div className='container'>
      <button onClick={getCareers}>Get Careers</button>
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

        {state.results.map((item, index) => {
          return (
            <div key={index} className='postContainer'>

              <div className='content-header std-width'>
                <h1>{item.title}</h1>
                <div className='icons-container'>
                  <img src={trash} />
                  <img src={edit} />
                </div>

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
        })}

      </div>


    </div>
  )
}

export default MainScreen;
