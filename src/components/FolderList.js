import React, { useState, useRef, useEffect } from "react";
import classes from "./FolderList.module.css";
import FolderItem from "./FolderItem";
import Kocham from "./mainFolders/Kocham";
import SamAndColby from "./mainFolders/SamAndColby";
import Lista from "./mainFolders/Lista";
import NieWiem from "./mainFolders/NieWiem";
import ChatGpt from "./mainFolders/ChatGpt";
import Dzwieki from "./mainFolders/Dzwieki";
import Haslo from "./mainFolders/Haslo";
import Fanarty from "./mainFolders/Fanarty";
import Wierszyk from "./mainFolders/Wierszyk";
import Najlepsza from "./mainFolders/Najlepsza";
import HasloAccepted from "./mainFolders/HasloAccepted";
import Quiz from "./mainFolders/Quiz";
import ChangeBg from "./mainFolders/ChangeBg";
import Bears from "./mainFolders/Bears";

function FolderList() {
  const [selectedFolderIndex, setSelectedFolderIndex] = useState(0);
  const [selectedFolders, setSelectedFolders] = useState([]);
  const selectedFolderNames = [
    { name: "About me1", type: "text" },
    { name: "Industry knowledge2", type: "heart" },
    { name: "Projects3", type: "projects" },
    { name: "Skills set 4", type: "folder" },
    { name: "Experience", type: "folder" },
    { name: "Education", type: "folder" },
    { name: "Contact me", type: "contact" },
    { name: "Hasło (tajne)", type: "setting" },
    { name: "Fanarty!", type: "folder" },
    { name: "Wierszyk", type: "folder" },
    { name: "Zrobiłem quiz", type: "game" },
    { name: "Zmień tło", type: "setting" },
    { name: "Generator miśkow!", type: "folder" },
  ];

  const folderRef = useRef(null);

  const [selectedClass, setSelectedClass] = useState(classes.FolderListWrapper);

  //   const handleFolderSelection = (index) => {
  //     setSelectedFolders((prevSelectedFolders) => {
  //       if (prevSelectedFolders.includes(index)) {
  //         return prevSelectedFolders.filter(
  //           (folderIndex) => folderIndex !== index
  //         );
  //       } else {
  //         return [...prevSelectedFolders, index];
  //       }
  //     });
  //   };

  const handleFolderSelection = (index) => {
    setSelectedFolderIndex(index);
  };

  const folderComponents = [
    null,
    <Najlepsza handleFolderSelection={handleFolderSelection} />,
    <Kocham handleFolderSelection={handleFolderSelection} />,
    <SamAndColby handleFolderSelection={handleFolderSelection} />,
    <Lista handleFolderSelection={handleFolderSelection} />,
    <NieWiem handleFolderSelection={handleFolderSelection} />,
    <ChatGpt handleFolderSelection={handleFolderSelection} />,
    <Dzwieki handleFolderSelection={handleFolderSelection} />,
    <Haslo handleFolderSelection={handleFolderSelection} />,
    <Fanarty />,
    <Wierszyk handleFolderSelection={handleFolderSelection} />,
    <Quiz handleFolderSelection={handleFolderSelection} />,
    <ChangeBg handleFolderSelection={handleFolderSelection} />,
    <Bears handleFolderSelection={handleFolderSelection} />,
    <HasloAccepted handleFolderSelection={handleFolderSelection} />,
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
