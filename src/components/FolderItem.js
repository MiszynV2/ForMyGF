import React, { useState } from "react";
import folder from "../sources/folder.svg";
import classes from "./FolderItem.module.css";

function FolderItem({ name, index, onClick }) {
  const handleClick = () => {
    onClick(index); 
  };

  return (
    <div className={classes.FolderItemWrapper} onClick={handleClick}>
      <img src={folder} className={classes.FolderLogo} alt="logo" />
      <h1 className={classes.FolderText}>{name}</h1>
    </div>
  );
}

export default FolderItem;
