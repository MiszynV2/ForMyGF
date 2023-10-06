import React, { useState, useRef, useEffect } from "react";
import classes from "./FolderList.module.css";
import FolderItem from "./FolderItem";
import Industry from "./mainFolders/Industry";
import Projects from "./mainFolders/Projects";
import Education from "./mainFolders/Education";
import Experience from "./mainFolders/Experience";
import Haslo from "./mainFolders/Haslo";
import AboutMe from "./mainFolders/AboutMe";
import TicTacToe from "./mainFolders/TicTacToe";
import Duck from "./mainFolders/Duck";
import SkillsSet from "./mainFolders/SkillsSet";
import Contact from "./mainFolders/Contact";

import folder from "../sources/images/folder.png";
import contact from "../sources/images/contact.png";
import projects from "../sources/images/projects.png";
import blocks from "../sources/images/experience.png";
import text from "../sources/images/text.png";
import setting from "../sources/setting.svg";
import game from "../sources/game.svg";
import duck from "../sources/duck.png";
import check from "../sources/check.svg";
import heart from "../sources/heart.svg";
import education from "../sources/images/education.png";

const WINDOWS_DATA = [
  {
    id: "about_me",
    isOpen: false,
    name: "About me",
    icon: text,
    Component: AboutMe,
  },
  {
    id: "industry",
    isOpen: false,
    name: "Industry knowledge2",
    icon: setting,
    Component: Industry,
  },
  {
    id: "project",
    isOpen: false,
    name: "Projects",
    icon: projects,
    Component: Projects,
  },
  {
    id: "skills_set",
    isOpen: false,
    name: "Skills set",
    icon: check,
    Component: SkillsSet,
  },
  {
    id: "education",
    isOpen: false,
    name: "Education",
    icon: blocks,
    Component: Education,
  },
  {
    id: "experience",
    isOpen: false,
    name: "Experience",
    icon: education,
    Component: Experience,
  },
  {
    id: "contact",
    isOpen: false,
    name: "Contact me",
    icon: contact,
    Component: Contact,
  },
  {
    id: "haslo",
    isOpen: false,
    name: "Hasło (tajne)",
    icon: setting,
    Component: Haslo,
  },
  {
    id: "tic_tac_toe",
    isOpen: false,
    name: "Tic tac toe",
    icon: game,
    Component: TicTacToe,
  },
  {
    id: "duck",
    isOpen: false,
    name: "Duck.exe",
    icon: duck,
    Component: Duck,
  },
];

function FolderList() {
  const [activeWindowsId, setActiveWindowsId] = useState([]);

  function handleOpenWindows(windowId) {
    setActiveWindowsId((prevState) => [...new Set([...prevState, windowId])]);
  }
  function handleCloseWindows(windowId) {
    // if (activeWindowsId.length === 1) {
    //   return setActiveWindowsId([]);
    // }
    console.log("closewindow ", windowId.id);
    const filteredWindowsId = activeWindowsId.filter(
      (id) => id !== windowId.id
    );
    console.log("filteredWindowsId ", filteredWindowsId);

    return setActiveWindowsId(filteredWindowsId);
  }

  return (
    <div className={classes.FolderListWrapper}>
      {WINDOWS_DATA.map((folderData) => (
        <FolderItem
          icon={folderData.icon}
          key={folderData.id}
          name={folderData.name}
          onClick={() => {
            handleOpenWindows(folderData.id);
          }}
        />
      ))}
      {activeWindowsId.map((id) => {
        const windowElement = WINDOWS_DATA.find((element) => element.id === id);
        const Component = windowElement.Component;
        return (
          <Component
            key={id}
            close={() => {
              handleCloseWindows(windowElement);
            }}
          />
        );
      })}
      {/* 1.przemapuj po aktywnych oknac 2.wez folder data dla id 3.wyrenderuj */}
    </div>
  );
}

// Struktury danych
// Design Pattern

export default FolderList;
