import React, { useState, useRef } from "react";
import classes from "./Window.module.css";

function Window({ children }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(Math.random() * 100);
  const [startY, setStartY] = useState(Math.random() * 100);
  const [offsetX, setOffsetX] = useState(Math.random() * 100);
  const [offsetY, setOffsetY] = useState(Math.random() * 100);
  const [zIndex, setZIndex] = useState(1);
  const windowRef = useRef(null);
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX - offsetX);
    setStartY(e.clientY - offsetY);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newOffsetX = e.clientX - startX;
      const newOffsetY = e.clientY - startY;
      setOffsetX(newOffsetX);
      setOffsetY(newOffsetY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleClick = () => {
    windowRef.current.focus();
  };
  const handleClickOutside = () => {
    setZIndex(1);
  };
  return (
    <div
      className={classes.Wrapper}
      style={{
        transform: `translate(${offsetX}px, ${offsetY}px)`,
      }}
      ref={windowRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      onClickOutside={handleClickOutside}
      tabIndex={0}
    >
      {children}
    </div>
  );
}

export default Window;
