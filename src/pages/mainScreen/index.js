import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './style.css'
import trash from '../../components/assets/trash.png'
import edit from '../../components/assets/edit.png'
import { useSelector } from 'react-redux';
import { calculateTimeAgo } from '../../components/timeAgo'
import { handleChange } from '../../components/handleChange';
import { GetCareers } from '../../actions/getCareers';
import DeleteModal from '../../components/deleteModal';
import DeleteItem from '../../actions/deleteItem';
import VerifyUsername from '../../components/verifyUsername';
import EditModal from '../../components/editModal';
import EditItem from '../../actions/editItem';
import PostItem from '../../actions/postItem';

function MainScreen() {

  const [disabledButton, setDisabledButton] = useState(true);

  const [showDelete, setShowDelete] = useState(false);

  const [showEdit, setShowEdit] = useState(false);

  const [id, setId] = useState('');

  const [title, setTitle] = useState('');

  const [content, setContent] = useState('');

  const state = useSelector(state => state.careersContent);

  const navigate = useNavigate();

  //gets the last 10 posts and set to redux state
  GetCareers();

  useEffect(() => {
    VerifyUsername(state.username, navigate);
  }, [])

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

  const handleDelete = () => {
    DeleteItem(id);
    setShowDelete(false);
  }

  const handleShowDelete = () => {
    setShowDelete(true);
  }

  const handleOnCancelDelete = () => {
    setShowDelete(false);
  }

  const handleShowEdit = () => {
    setShowEdit(true);
  }

  const handleOnCancelEdit = () => {
    setShowEdit(false);
  }

  const handleEdit = (id, title, content) => {
    EditItem(id, title, content);
    setShowEdit(false);
  }

  const handlePost = () => {
    console.log(state.username, "aaa", title, content);
    PostItem(state.username, title, content);
  }


  function mapPosts() {
    if (state.initialLoad) {
      return (
        state.results.map((item, index) => {
          return (
            <div key={index} className='postContainer'>

              <div className='content-header std-width'>
                <h1>@{item.title}</h1>
                {item.username === state.username ?
                  <div className='icons-container'>
                    <img src={trash} onClick={() => {
                      setId(item.id);
                      handleShowDelete();
                    }} />
                    <img onClick={() => {
                      setId(item.id);
                      handleShowEdit();
                    }}
                      src={edit} />
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
              <button disabled={disabledButton} onClick={handlePost} className='create'>CREATE</button>
            </div>
          </div>
        </div>

        {mapPosts()}

      </div>

      <DeleteModal show={showDelete} onConfirm={handleDelete} onCancel={handleOnCancelDelete} />
      <EditModal show={showEdit} id={id} onCancel={handleOnCancelEdit} onConfirm={handleEdit} />
    </div>
  )
}

export default MainScreen;
