import React from "react";
import classes from "./MainFolder.module.css";
import wierszyk from "../../sources/wierszyk.png";

function Wierszyk({ handleFolderSelection }) {
  const handleCloseClick = (e) => {
    e.stopPropagation();
    handleFolderSelection(0);
  };

  return (
    <div className={classes.ChatGptWrapper}>
      <div className={classes.TitleBar}>
        <div className={classes.Title}>Wierszyk dla Kody</div>
        <div className={classes.Icons}>
          <div className={classes.CloseButton} onClick={handleCloseClick}>
            ✕
          </div>
        </div>
      </div>
      <img src={wierszyk} className={classes.folderImage} alt="logo" />
    </div>
  );
}

export default Wierszyk;
