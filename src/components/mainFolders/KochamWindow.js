import React, { useState, useEffect } from "react";
import classes from "./MainFolder.module.css";

function ChatGptWindow({ title, image, onClose, onMinimize }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX - offsetX);
    setStartY(e.clientY - offsetY);
    e.preventDefault();
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

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, offsetX, offsetY, startX, startY]);

  return (
    <div
      className={classes.Wrapper}
      style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
      onMouseDown={handleMouseDown}
    >
      <div className={classes.TitleBar}>
        <div className={classes.Title}>{title}</div>
        <div className={classes.Icons}>
          <div className={classes.CloseButton} onClick={onClose}>
            ✕
          </div>
        </div>
      </div>
      <div className={classes.ImageWrapper}>
        <img src={image} className={classes.folderImage} alt={title} />
      </div>
    </div>
  );
}

export default ChatGptWindow;
