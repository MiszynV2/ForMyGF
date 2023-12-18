import React, { useState, useRef } from "react";
import classes from "./UserMenu.module.css";
import windowsLogo from "../../../sources/windowsLogo.png";
import car from "../../../sources/car.png";
import logoff from "../../../sources/logoff.png";
import turnoff from "../../../sources/turnoff.png";
import aboutme from "../../../sources/images/text.png";
import mycomputer from "../../../sources/images/computer.png";
import project from "../../../sources/images/projects.png";
import duckexe from "../../../sources/duck.png";
import minesweeper from "../../../sources/minesweeper.png";
import gaduchat from "../../../sources/gadu-chat-logo.webp";
import skillset from "../../../sources/check.svg";
import education from "../../../sources/images/education.png";
import paint from "../../../sources/images/paint.png";
import contactme from "../../../sources/images/contact.png";
import internet from "../../../sources/images/internet.png";
import experience from "../../../sources/images/experience.png";
import folder from "../../../sources/images/folder.png";
import GaduChat from "../windowsFolder/chatGaduComponents/GaduChat";
import CloseWindow from "../windowsFolder/CloseWindow";
import { computeHeadingLevel } from "@testing-library/react";

const USER_MENU_DATA1 = [
  {
    title: "Internet",
    id: "Country_Statistics.html",
    icon: internet,
    subtitle: "Intenet Explorer",
  },
  {
    title: "My Computer",
    id: "My Computer",
    icon: mycomputer,
    subtitle: "My computer",
  },
  {
    title: "Duck.exe",
    id: "Duck.exe",
    icon: duckexe,
    subtitle: "Play this awesome 2D game!",
  },
  { title: "About me", id: "About me", icon: aboutme, subtitle: "" },

  {
    title: "Minesweeper",
    id: "Minesweeper",
    icon: minesweeper,
    subtitle: "",
  },
  {
    title: "Gadu Chat",
    id: "Gadu Chat",
    icon: gaduchat,
    subtitle: "Chat with your friends!",
  },
  {
    title: "Paint",
    id: "Paint",
    icon: paint,
    subtitle: "",
  },
];
const USER_MENU_DATA2 = [
  { title: "Internet", icon: internet, subtitle: "" },
  { title: "My Computer", icon: mycomputer, subtitle: "" },
  { title: "Duck.exe", icon: duckexe, subtitle: "" },
  { title: "About me", icon: aboutme, subtitle: "" },

  {
    title: "Windows Media Player",
    icon: windowsLogo,
    subtitle: "",
  },
  {
    title: "Paint",
    icon: paint,
    subtitle: "",
  },
  { title: "Winamp", icon: windowsLogo, subtitle: "" },
  { title: "Games", icon: folder, subtitle: "" },
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
  { title: "Winamp", icon: windowsLogo, subtitle: "" },
];
function UserMenu({ activeWindowsId, setActiveWindowsId }) {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  function handleImgClick() {
    setIsButtonClicked(!isButtonClicked);
  }
  function handleOpenWindows(windowId) {
    setActiveWindowsId((prevState) => [...new Set([...prevState, windowId])]);
  }

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
              <li
                className={classes.UserMenuLeftSectionItem}
                onClick={() => {
                  handleOpenWindows(element.id);
                }}
              >
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
        <div onClick={handleImgClick}>
          <img
            className={classes.UserMenuLeftSectionImage}
            src={logoff}
            alt={"close off logo"}
            onClick={handleImgClick}
          />
          <span>Log Off</span>
        </div>
        <div onClick={handleImgClick}>
          <img
            className={classes.UserMenuRightSectionImage}
            src={turnoff}
            alt={"turn off logo"}
          />
          <span>Turn Off Computer</span>
        </div>
      </div>
      {isButtonClicked && <CloseWindow onCancelClick={handleImgClick} />}
    </div>
  );
}

export default UserMenu;
