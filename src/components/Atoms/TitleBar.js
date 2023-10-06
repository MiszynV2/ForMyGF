import React, { useState } from "react";
import classes from "./TitleBar.module.css";
import CloseButton from "../../sources/close.svg";
function TitleBar(props) {
  return (
    <div className={classes.TitleBar}>
      <div className={classes.ImgTitle}>
        <img
          src={props.image}
          className={classes.FolderLogo}
          alt="Folder logo"
        />
        <span className={classes.Title}>{props.title}</span>
      </div>
      <div className={classes.Icons}>
        <button
          className={classes.CloseButton}
          src={CloseButton}
          onClick={props.close}
        />
      </div>
    </div>
  );
}

export default TitleBar;
