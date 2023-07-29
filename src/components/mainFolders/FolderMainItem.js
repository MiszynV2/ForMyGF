import React, { useState } from "react";
import folder from "../../sources/folder.svg";
import classes from "./FolderMainItem.module.css";

function FolderMainItem({ name, index }) {
  return (
    <div className={classes.FolderMainItem}>
      <img src={folder} className={classes.FolderLogo} alt="logo" />
      <h1 className={classes.FolderText}>{name}</h1>
    </div>
  );
}

export default FolderMainItem;
