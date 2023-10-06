import React, { useState } from "react";
import classes from "./UserMenu.module.css";
import windowsLogo from "../../../sources/windowsLogo.png";

function UserMenu(props) {
  return (
    <div className={classes.UserMenuWrapper}>
      <div className={classes.MenuHeader}>
        <img
          className={classes.FooterStartButtonImage}
          src={windowsLogo}
          alt="windows logo"
        />
        <span>User</span>
      </div>
      <div className={classes.MenuSections}>
        <div className={classes.UserMenuLeftSection}></div>
        <div className={classes.UserMenuLeftSection}></div>
      </div>
      <div className={classes.UserMenuFooter}></div>
      <div></div>
    </div>
  );
}

export default UserMenu;
