import React, { useState } from "react";
import classes from "./MainFolder.module.css";
import FolderMainItem from "./FolderMainItem";

function Haslo() {
  const FolderNames = [
    { name: "Hasło bff (nie otwierać)" },
    { name: "Hasło cie" },
    { name: "Hasło and Colby!?!?" },
    { name: "Hasło do zrobienia z kodą" },
    { name: "Hasło wiem co to tu robi" },
    { name: "Hasło-gpt kto jest best gf?" },
    { name: "Hasło dźwieki ever" },
    { name: "Hasło" },
    { name: "Hasło" },
    { name: "Hasło" },
  ];

  const [selectedFolderIndex, setSelectedFolderIndex] = useState(0);

  const handleFolderSelection = (index) => {
    setSelectedFolderIndex(index);
  };

  return (
    <div className={classes.ChatGptWrapper}>
      <div className={classes.TitleBar}>
        <div className={classes.Title}>Haslo (nie ma)</div>
        <div className={classes.Icons}>
          <div className={classes.CloseButton}>✕</div>
        </div>
      </div>
    </div>
  );
}

export default Haslo;
