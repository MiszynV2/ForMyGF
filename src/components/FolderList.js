import React, { useState, useRef, useEffect } from "react";
import classes from "./FolderList.module.css";
import FolderItem from "./FolderItem";
import Industry from "./mainFolders/Industry";
import Lista from "./mainFolders/Lista";
import Education from "./mainFolders/Education";
import Experience from "./mainFolders/Experience";
import Haslo from "./mainFolders/Haslo";
import AboutMe from "./mainFolders/AboutMe";
import Quiz from "./mainFolders/Quiz";
import Bears from "./mainFolders/Bears";
import SkillsSet from "./mainFolders/SkillsSet";

function FolderList() {
  const [selectedFolderIndex, setSelectedFolderIndex] = useState(0);
  const [selectedFolders, setSelectedFolders] = useState([]);
  const selectedFolderNames = [
    { name: "About me", type: "text" },
    { name: "Industry knowledge2", type: "setting" },
    { name: "Projects", type: "projects" },
    { name: "Skills set", type: "check" },
    { name: "Education", type: "blocks" },
    { name: "Experience", type: "education" },
    { name: "Contact me", type: "contact" },
    { name: "Hasło (tajne)", type: "setting" },
    { name: "Tic tac toe", type: "game" },
    { name: "Duck.exe", type: "duck" },
  ];

  const folderRef = useRef(null);

  const [selectedClass, setSelectedClass] = useState(classes.FolderListWrapper);

  const handleFolderSelection = (index) => {
    setSelectedFolderIndex(index);
  };

  const folderComponents = [
    null,
    <AboutMe handleFolderSelection={handleFolderSelection} />,
    <Industry handleFolderSelection={handleFolderSelection} />,
    <Lista handleFolderSelection={handleFolderSelection} />,
    <SkillsSet handleFolderSelection={handleFolderSelection} />,
    <Education handleFolderSelection={handleFolderSelection} />,
    <Experience handleFolderSelection={handleFolderSelection} />,
    <Haslo handleFolderSelection={handleFolderSelection} />,
    <Quiz handleFolderSelection={handleFolderSelection} />,
    <Bears handleFolderSelection={handleFolderSelection} />,
  ];

  return (
    <div className={selectedClass}>
      {selectedFolderNames.map((folderName, index) => (
        <FolderItem
          type={folderName.type}
          key={index}
          name={folderName.name}
          index={index}
          onClick={() => setSelectedFolderIndex(index + 1)}
        />
      ))}
      {selectedFolderIndex !== 0 && (
        <div ref={folderRef}>{folderComponents[selectedFolderIndex]}</div>
      )}
    </div>
  );
}

export default FolderList;
