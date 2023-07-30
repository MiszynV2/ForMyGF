import React, { useState, useEffect } from "react";
import classes from "./MainFolder.module.css";
import maslogif from "../../sources/haslomaslo.gif";

function HasloAccepted({ handleFolderSelection }) {
  const [imagePosition, setImagePosition] = useState("left");
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleCloseClick = (e) => {
    e.stopPropagation();
    handleFolderSelection(0);
  };

  const handleImageClick = () => {
    setImagePosition(imagePosition === "left" ? "right" : "left");
  };

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
      className={classes.ChatGptWrapper}
      style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
      onMouseDown={handleMouseDown}
    >
      <div className={classes.TitleBar}>
        <div className={classes.Title}>Udało ci się!!!!!</div>
        <div className={classes.Icons}>
          <div className={classes.CloseButton} onClick={handleCloseClick}>
            ✕
          </div>
        </div>
      </div>
      <div
        className={`${classes.folderImageContainer} ${
          imagePosition === "right" ? classes.imagePositionRight : ""
        }`}
      >
        <img src={maslogif} className={classes.folderImage} alt="logo" />
        <a
          href="https://www.youtube.com/watch?v=iU4TC1yz51Q&ab_channel=threedimensionsapart-Topic"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </div>
    </div>
  );
}

export default HasloAccepted;
