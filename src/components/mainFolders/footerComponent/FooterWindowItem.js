import React, { useState, useRef } from "react";
import classes from "./FooterWindowItem.module.css";
{
  /* <img
src={props.image}
className={classes.WindowItemImage}
alt="Folder logo"
/> */
}
function FooterWindowsItem({
  setClickedWindow,
  clickedWindow,
  activeWindowsId,
  title,
  icon,
}) {
  const windowRef = useRef(null);
  const handleClick = () => {
    windowRef.current.focus();
  };
  setClickedWindow(title);
  return (
    <div
      tabIndex={0}
      ref={windowRef}
      onClick={handleClick}
      className={classes.Item}
    >
      <img src={icon} className={classes.WindowItemImage} alt="Folder logo" />
      <span className={classes.Title}>{title}</span>
    </div>
  );
}

export default FooterWindowsItem;
