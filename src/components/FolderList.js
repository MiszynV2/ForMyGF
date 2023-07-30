import React, { useState } from "react";
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
    { name: "Najlepsza gf to?", type: "folder" },
    { name: "Kocham cie", type: "heart" },
    { name: "Sam and Colby!?!?", type: "folder" },
    { name: "Lista do zrobienia z Kodą", type: "folder" },
    { name: "nie wiem co to tu robi", type: "folder" },
    { name: "Chat-gpt kto jest best gf?", type: "folder" },
    { name: "Najlepszy dźwiek ever", type: "folder" },
    { name: "Hasło (tajne)", type: "setting" },
    { name: "Fanarty!", type: "folder" },
    { name: "Wierszyk", type: "folder" },
    { name: "Zrobiłem quiz", type: "game" },
    { name: "Zmień tło", type: "setting" },
    { name: "Generator miśkow!", type: "folder" },
  ];

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
          onClick={() => handleFolderSelection(index + 1)}
        />
      ))}
      {selectedFolderIndex !== 0 && folderComponents[selectedFolderIndex]}
    </div>
  );
}

export default FolderList;
