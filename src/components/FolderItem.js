import React, { useState } from "react";

import classes from "./FolderItem.module.css";

function FolderItem({ onClick, name, alt, icon }) {
  return (
    <div className={classes.FolderItemWrapper} onClick={onClick}>
      {/* Alt is an empty string as the icon does not add any additional value over name of the folder */}
      <img src={icon} className={classes.FolderLogo} alt={""} />
      <h1 className={classes.FolderText}>{name}</h1>
    </div>
  );
}

export default FolderItem;
