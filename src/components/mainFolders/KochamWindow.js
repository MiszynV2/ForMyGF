import React from "react";
import classes from "./MainFolder.module.css";

function ChatGptWindow({ title, image, onClose, onMinimize }) {
  return (
    <div className={classes.ChatGptWrapper}>
      <div className={classes.TitleBar}>
        <div className={classes.Title}>{title}</div>
        <div className={classes.Icons}>
          <div className={classes.CloseButton} onClick={onClose}>
            ✕
          </div>
        </div>
      </div>
      <img src={image} className={classes.folderImage} alt={title} />
    </div>
  );
}

export default ChatGptWindow;
