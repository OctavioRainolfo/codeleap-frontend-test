import React, { useEffect, useRef } from 'react';

const ClickOutsideHandler = ({ onOutsideClick, children }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        onOutsideClick();
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onOutsideClick();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onOutsideClick]);

  return <div ref={containerRef}>{children}</div>;
};

export default ClickOutsideHandler;
