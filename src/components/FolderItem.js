import React, { useState } from "react";
import classes from "./FolderItem.module.css";

function FolderItem({ onClick, name, alt, icon }) {
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const [isHighlighted, setIsHighlighted] = useState(false);

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
    setIsHighlighted(true);
  };

  const handleClick = () => {
    setIsDragging(false);
  };

  return (
    <div
      className={`${classes.FolderItemWrapper} ${classes.isHighlighted}`}
      style={{
        transform: `translate(${offsetX}px, ${offsetY}px)`,
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onDoubleClick={onClick}
      onClick={handleClick}
      tabIndex={0}
    >
      <img src={icon} className={classes.FolderLogo} alt={""} />
      <h1 className={classes.FolderText}>{name}</h1>
    </div>
  );
}

export default FolderItem;
