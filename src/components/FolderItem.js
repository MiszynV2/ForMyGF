import React, { useState } from "react";
import folder from "../sources/images/folder.png";
import contact from "../sources/images/contact.png";
import projects from "../sources/images/projects.png";
import text from "../sources/images/text.png";
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
      {SvgOption === "contact" ? (
        <img
          src={contact}
          className={classes.FolderLogo}
          alt="folder_contact"
        />
      ) : (
        ""
      )}{" "}
      {SvgOption === "projects" ? (
        <img
          src={projects}
          className={classes.FolderLogo}
          alt="folder_projects"
        />
      ) : (
        ""
      )}{" "}
      {SvgOption === "setting" ? (
        <img
          src={setting}
          className={classes.FolderLogo}
          alt="folder_setting"
        />
      ) : (
        ""
      )}
      {SvgOption === "game" ? (
        <img src={game} className={classes.FolderLogo} alt="folder_game" />
      ) : (
        ""
      )}
      {SvgOption === "heart" ? (
        <img src={heart} className={classes.FolderLogo} alt="folder_heart" />
      ) : (
        ""
      )}
      {SvgOption === "text" ? (
        <img src={text} className={classes.FolderLogo} alt="folder_heart" />
      ) : (
        ""
      )}
      <h1 className={classes.FolderText}>{name}</h1>
    </div>
  );
}

export default FolderItem;
