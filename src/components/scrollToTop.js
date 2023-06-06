import React from 'react';

function ScrollToTop() {
  const handleClick = () => {
    // Apply the class for smooth scrolling
    document.body.classList.add('scroll-to-top');

    // Scroll to the top of the page
    window.scrollTo(0, 0);

    // Remove the class after scrolling is complete
    setTimeout(() => {
      document.body.classList.remove('scroll-to-top');
    }, 1000); // Adjust the timeout value to match the duration of the scrolling animation
  };

  return (
    <button onClick={handleClick}>Scroll to Top</button>
  );
}

export default ScrollToTop;
