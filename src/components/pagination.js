import React from 'react';

function Pagination({ getNextPage, dispatch, state, setLoader }) {

    const handleClickNext = () => {
        setLoader(true);
        getNextPage(dispatch, state.next, setLoader);
        scrollToTop();
    };

    const handleClickPrevious = () => {
        setLoader(true);
        getNextPage(dispatch, state.previous, setLoader);
        scrollToTop();
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className='pagination'>
            {state.previous && <button onClick={handleClickPrevious} className='pagination-button'>Previous</button>}
            {state.next && <button onClick={handleClickNext} className='pagination-button'>Next</button>}
        </div>
    );
}

export default Pagination;
