import React from "react";
import classes from "./MainFolder.module.css";
import chatgpt from "../../sources/chatgpt.png";

function ChatGpt({ handleFolderSelection }) {
  const handleCloseClick = (e) => {
    e.stopPropagation();
    handleFolderSelection(0);
  };

  return (
    <div className={classes.ChatGptWrapper}>
      <div className={classes.TitleBar}>
        <div className={classes.Title}>ChatGpt</div>
        <div className={classes.Icons}>
          <div className={classes.CloseButton} onClick={handleCloseClick}>
            ✕
          </div>
        </div>
      </div>
      <img src={chatgpt} className={classes.folderImage} alt="logo" />
    </div>
  );
}

export default ChatGpt;
