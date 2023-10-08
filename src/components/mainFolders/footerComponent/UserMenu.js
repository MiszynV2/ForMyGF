import React, { useState, useRef } from "react";
import classes from "./UserMenu.module.css";
import windowsLogo from "../../../sources/windowsLogo.png";
import car from "../../../sources/car.png";
import logoff from "../../../sources/logoff.png";
import turnoff from "../../../sources/turnoff.png";

const USER_MENU_DATA1 = [
  { title: "Internet", icon: windowsLogo, subtitle: "Intenet Explorer" },
  { title: "E-mail", icon: windowsLogo, subtitle: "Outlook Express" },
  { title: "TicTacToe", icon: windowsLogo, subtitle: "" },
  { title: "Notepad", icon: windowsLogo, subtitle: "" },

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
const USER_MENU_DATA2 = [
  { title: "Internet", icon: windowsLogo, subtitle: "Intenet Explorer" },
  { title: "E-mail", icon: windowsLogo, subtitle: "Outlook Express" },
  { title: "TicTacToe", icon: windowsLogo, subtitle: "" },
  { title: "Notepad", icon: windowsLogo, subtitle: "" },
  { title: "Winamp", icon: windowsLogo, subtitle: "" },
  { title: "Paint", icon: windowsLogo, subtitle: "" },
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
        <img className={classes.UserImage} src={car} alt="windows logo" />
        <span>Wm windows</span>
      </div>
      <div className={classes.MenuSections}>
        <ul className={classes.UserMenuLeftSectionWrapper}>
          {USER_MENU_DATA1.map((element) => {
            return (
              <li className={classes.UserMenuLeftSectionItem}>
                <img
                  className={classes.UserMenuLeftSectionImage}
                  src={element.icon}
                  alt={element.title}
                />
                <div>
                  <span className={classes.title}>{element.title}</span>
                  <span className={classes.subtitle}>{element.subtitle}</span>
                </div>
              </li>
            );
          })}
        </ul>

        <ul className={classes.UserMenuRightSectionWrapper}>
          {USER_MENU_DATA2.map((element, index) => {
            return (
              <li className={classes.UserMenuRightSectionItem} key={index}>
                <img
                  className={classes.UserMenuRightSectionImage}
                  src={element.icon}
                  alt={element.title}
                />
                <div>
                  <span className={classes.title}>{element.title}</span>
                  <span className={classes.subtitle}>{element.subtitle}</span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={classes.UserMenuFooter}>
        <img
          className={classes.UserMenuLeftSectionImage}
          src={logoff}
          alt={"close off logo"}
        />
        <span>Log Off</span>
        <img
          className={classes.UserMenuRightSectionImage}
          src={turnoff}
          alt={"turn off logo"}
        />
        <span>Turn Off Computer</span>
      </div>
    </div>
  );
}

export default UserMenu;
