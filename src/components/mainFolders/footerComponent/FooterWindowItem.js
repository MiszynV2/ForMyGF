import React, { useRef } from "react";
import classes from "./FooterWindowItem.module.css";

function FooterWindowsItem({
  onClick,
  title,
  icon,
  clickedWindow,
  setClickedWindow,
}) {
  const windowRef = useRef(null);

  const handleClick = () => {
    onClick();
    setClickedWindow(title);
  };

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
