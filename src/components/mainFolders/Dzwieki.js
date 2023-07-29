import React, { useState } from "react";
import classes from "./MainFolder.module.css";
import FolderMainItem from "./FolderMainItem";

function Dzwieki() {
  const FolderNames = [
    { name: "FanartyNajlepsza bff (nie otwierać)" },
    { name: "Kocham cie" },
    { name: "Sam and Colby!?!?" },
    { name: "Lista do zrobienia z kodą" },
    { name: "nie wiem co to tu robi" },
    { name: "Chat-gpt kto jest best gf?" },
    { name: "Najlepsze dźwieki ever" },
    { name: "Hasło" },
    { name: "Fanarty" },
    { name: "Wierszyk" },
  ];

  const [selectedFolderIndex, setSelectedFolderIndex] = useState(0);

  const handleFolderSelection = (index) => {
    setSelectedFolderIndex(index);
  };

  return (
    <div className={classes.ChatGptWrapper}>
      <div className={classes.TitleBar}>
        <div className={classes.Title}>Dzwieki (nie ma)</div>
        <div className={classes.Icons}>
          <div className={classes.CloseButton}>✕</div>
        </div>
      </div>
    </div>
  );
}

export default Dzwieki;
