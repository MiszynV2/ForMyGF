import React, { useState } from "react";
import folder from "../sources/folder.svg";
import setting from "../sources/setting.svg";
import game from "../sources/game.svg";
import heart from "../sources/heart.svg";

import classes from "./FolderItem.module.css";

function FolderItem({ name, index, onClick, type }) {
  const [SvgOption, setSvgOption] = useState(type);

  const handleClick = () => {
    onClick(index);
  };

  return (
    <div className={classes.FolderItemWrapper} onClick={handleClick}>
      {SvgOption === "folder" ? (
        <img src={folder} className={classes.FolderLogo} alt="folder" />
      ) : (
        ""
      )}{" "}
      {SvgOption === "setting" ? (
        <img src={setting} className={classes.FolderLogo} alt="folder" />
      ) : (
        ""
      )}
      {SvgOption === "game" ? (
        <img src={game} className={classes.FolderLogo} alt="folder" />
      ) : (
        ""
      )}
      {SvgOption === "heart" ? (
        <img src={heart} className={classes.FolderLogo} alt="folder" />
      ) : (
        ""
      )}
      <h1 className={classes.FolderText}>{name}</h1>
    </div>
  );
}

export default FolderItem;
