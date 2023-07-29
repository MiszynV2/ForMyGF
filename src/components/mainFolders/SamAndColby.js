import React, { useState } from "react";
import classes from "./MainFolder.module.css";
import pointing from "../../sources/soyjak-pointing.jpg";
import samAndColby from "../../sources/sam-and-colby.jpg";

function SamAndColby({ handleFolderSelection }) {
  const [imagePosition, setImagePosition] = useState("left");

  const handleCloseClick = (e) => {
    e.stopPropagation();
    handleFolderSelection(0);
  };

  const handleImageClick = () => {
    setImagePosition(imagePosition === "left" ? "right" : "left");
  };

  return (
    <div className={classes.ChatGptWrapper}>
      <div className={classes.TitleBar}>
        <div className={classes.Title}>Nowy odcinek!?!?(kliknij)</div>
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
        <img src={pointing} className={classes.folderImage} alt="logo" />
        <a
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={samAndColby}
            className={classes.folderImageInside}
            alt="logo"
            onClick={handleImageClick}
          />
        </a>
      </div>
    </div>
  );
}

export default SamAndColby;
