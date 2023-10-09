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
}) {
  const windowRef = useRef(null);
  const handleClick = () => {
    windowRef.current.focus();
    console.log("łołi");
  };
  setClickedWindow(title);
  return (
    <div
      tabIndex={1}
      ref={windowRef}
      onClick={handleClick}
      className={classes.Item}
    >
      <div className={classes.Wrapper}>
        <span className={classes.Title}>{title}</span>
      </div>
    </div>
  );
}

export default FooterWindowsItem;
