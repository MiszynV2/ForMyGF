import React, { useState } from "react";
import classes from "./FolderList.module.css";
import FolderItem from "./FolderItem";
import FolderMainItem from "./mainFolders/FolderMainItem";
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

function FolderList() {
  const handleFolderSelection = (index) => {
    setSelectedFolderIndex(index);
  };
  const folderComponents = [
    null,
    <Najlepsza />,
    <Kocham handleFolderSelection={handleFolderSelection} />,
    <SamAndColby handleFolderSelection={handleFolderSelection} />,
    <Lista />,
    <NieWiem />,
    <ChatGpt handleFolderSelection={handleFolderSelection} />,
    <Dzwieki />,
    <Haslo />,
    <Fanarty />,
    <Wierszyk handleFolderSelection={handleFolderSelection} />,
  ];

  const [selectedFolderIndex, setSelectedFolderIndex] = useState(0);
  const [selectedFolderNames, setSelectedFolderNames] = useState([
    { name: "Najlepsza bff (nie otwierać)" },
    { name: "Kocham cie" },
    { name: "Sam and Colby!?!?" },
    { name: "Lista do zrobienia z kodą" },
    { name: "nie wiem co to tu robi" },
    { name: "Chat-gpt kto jest best gf?" },
    { name: "Najlepsze dźwieki ever" },
    { name: "Hasło" },
    { name: "Fanarty" },
    { name: "Wierszyk" },
  ]);
  const [selectedClass, setSelectedClass] = useState(classes.FolderListWrapper);
  console.log("handleFolderSelection  :", handleFolderSelection);
  return (
    <div className={selectedClass}>
      {selectedFolderNames.map((folderName, index) => (
        <FolderItem
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
