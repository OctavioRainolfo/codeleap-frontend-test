import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css'
import trash from '../../components/assets/trash.png'
import edit from '../../components/assets/edit.png'
import { useSelector, useDispatch } from 'react-redux';
import { calculateTimeAgo } from '../../components/timeAgo'
import { handleChange } from '../../components/handleChange';
import DeleteModal from '../../components/deleteModal';
import VerifyUsername from '../../components/verifyUsername';
import { BouncingModalLoader } from '../../components/loaderModal';
import { getItems, getNextPage, postItem, deleteItem, editItem } from '../../actions/api';
import EditModal from '../../components/editModal';
import { motion } from 'framer-motion';
import Pagination from '../../components/pagination';
import { SetLogout } from '../../actions/dispatchLogoutState';

function MainScreen() {

  const [disabledButton, setDisabledButton] = useState(true);

  const [showDelete, setShowDelete] = useState(false);

  const [showEdit, setShowEdit] = useState(false);

  const [id, setId] = useState('');

  const [loader, setLoader] = useState(false);

  const [title, setTitle] = useState('');

  const [content, setContent] = useState('');

  const state = useSelector(state => state.careersContent);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [posted, setPosted] = useState(false);

  const [deleted, setDeleted] = useState(false);

  const [edited, setEdited] = useState(false);

  const buttonRef = useRef(null);

  //gets the last 10 posts and set to redux state
  useEffect(() => {
    if (!state.initialLoad) {
      getItems(dispatch);
      setLoader(false);
    }
  }, [dispatch, state.initialLoad]);

  //if the post was successful, get the last 10 posts again
  useEffect(() => {
    if (posted) {
      getItems(dispatch);
      setPosted(false);
      setLoader(false);
    }
    if (deleted) {
      getItems(dispatch);
      setDeleted(false);
      setLoader(false);
    }
    if (edited) {
      getItems(dispatch);
      setEdited(false);
      setLoader(false);
    }
  }, [posted, deleted, edited, dispatch]);

  const handlePost = () => {
    setLoader(true);
    postItem(state.username, title, content, setPosted, dispatch);
    setTitle('');
    setContent('');
  }

  useEffect(() => {
    VerifyUsername(state.username, navigate);
  }, [navigate, state.username]);

  useEffect(() => {
    if (title.length > 0 && content.length > 0) {
      setDisabledButton(false);
    } else {
      !disabledButton && setDisabledButton(true);
    }
  }, [title, content, disabledButton]);

  useEffect(() => {
  }, [state]);

  const handleDelete = useCallback(() => {
    setLoader(true);
    deleteItem(id, setDeleted, dispatch);
    setShowDelete(false);
  }, [id, dispatch]);

  const handleOnCancelDelete = useCallback(() => {
    setShowDelete(false);
  }, []);

  const handleShowDelete = useCallback(() => {
    setShowDelete(true);
  }, []);

  const handleShowEdit = useCallback(() => {
    setShowEdit(true);
  }, []);

  const handleOnCancelEdit = useCallback(() => {
    setShowEdit(false);
  }, []);

  const handleEdit = useCallback((id, title, content) => {
    setLoader(true);
    editItem(id, title, content, setEdited, dispatch);
    setShowEdit(false);
  }, [dispatch]);

  const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
      buttonRef.current.click()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handleEnterPress);

    return () => {
      document.removeEventListener('keydown', handleEnterPress);
    };
  }, []);

  const mapPosts = useMemo(() => {
    if (state.initialLoad) {
      return (
        state.results.map((item, index) => {
          return (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={index}
              className='postContainer'
            >

              <div className='content-header std-width'>
                <h1>@{item.title}</h1>
                {item.username === state.username ?
                  <div className='icons-container'>
                    <img src={trash} alt="delete"
                      onClick={() => {
                        setId(item.id);
                        handleShowDelete();
                      }} />
                    <img alt="edit"
                      onClick={() => {
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


            </motion.div>
          )
        })
      )
    } else {
      return <BouncingModalLoader />
    }

  }, [state.results, state.username, state.initialLoad, handleShowDelete, handleShowEdit]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='container'>
        <div className='mainContent'>

          <div className='mainTitle'>
            <h1>CodeLeap Network</h1>
            {state.username ?
              <div className='logout-container'>
                <h2>Welcome, {state.username}</h2>
                <button
                  className='logout-button'
                  onClick={() => {
                    SetLogout(dispatch);
                    navigate('/');
                  }}>Logout
                </button>
              </div>
              :
              null}
          </div>

          <div className="postContainer">
            <div className='content std-width'>
              <h1 className='std-margin'>What's on your mind?</h1>

              <div className='titleInput std-margin std-width'>
                <h2>Title</h2>
                <input
                  value={title}
                  onChange={handleChange(setTitle)}
                  type="text" placeholder="Hello world" />
              </div>
              <div className='contentInput std-margin std-width'>
                <h2>Content</h2>
                <textarea
                  value={content}
                  onChange={handleChange(setContent)}
                  rows="4" placeholder="Content here" />
              </div>

              <div className='create-button std-width'>
                <button
                  ref={buttonRef}
                  onKeyDown={handleEnterPress}
                  disabled={disabledButton} onClick={handlePost} className='create'>CREATE</button>
              </div>
            </div>
          </div>

          {mapPosts}

          <Pagination getNextPage={getNextPage}
            dispatch={dispatch}
            state={state}
            setLoader={setLoader}
          />

        </div>

        {loader ? <BouncingModalLoader /> : null}
        <DeleteModal show={showDelete} onConfirm={handleDelete}
          onCancel={handleOnCancelDelete} />
        <EditModal show={showEdit} id={id}
          onCancel={handleOnCancelEdit} onConfirm={handleEdit}
          array={state.results} />
      </div>
    </motion.div>
  )
}

export default MainScreen;
