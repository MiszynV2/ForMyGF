import React, { useState, useRef } from "react";
import classes from "./UserMenu.module.css";
import windowsLogo from "../../../sources/windowsLogo.png";

const USER_MENU_DATA = [
  { title: "Internet", icon: windowsLogo, subtitle: "Intenet Explorer" },
  { title: "E-mail", icon: windowsLogo, subtitle: "Outlook Express" },
  { title: "TicTacToe", icon: windowsLogo, subtitle: "" },
  { title: "Notepad", icon: windowsLogo, subtitle: "" },
  { title: "Winamp", icon: windowsLogo, subtitle: "" },
  { title: "Paint", icon: windowsLogo, subtitle: "" },
  {
    title: "Windows Media Player",
    icon: windowsLogo,
    subtitle: "",
  },
  {
    title: "Windows Messenger",
    icon: windowsLogo,
    subtitle: "",
  },
];
function UserMenu() {
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
        <div className={classes.UserMenuLeftSection}>
          <ul className={classes.UserMenuLeftSectionWrapper}>
            {USER_MENU_DATA.map((element) => {
              return (
                <div className={classes.UserMenuLeftSectionItem}>
                  <img
                    className={classes.UserMenuLeftSectionImage}
                    src={element.icon}
                    alt={element.title}
                  />
                  <div>
                    <span className={classes.title}>{element.title}</span>
                    <span className={classes.subtitle}>{element.subtitle}</span>
                  </div>
                </div>
              );
            })}
          </ul>
        </div>
        <div className={classes.UserMenuLeftSection}></div>
      </div>
      <div className={classes.UserMenuFooter}></div>
      <div></div>
    </div>
  );
}

export default UserMenu;
