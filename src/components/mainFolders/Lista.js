import React, { useState } from "react";
import classes from "./MainFolder.module.css";

function Lista() {
  const FolderNames = [
    { name: "Lista bff (nie otwierać)" },
    { name: "Lista cie" },
    { name: "Lista and Colby!?!?" },
    { name: "Lista do zrobienia z kodą" },
    { name: "Lista wiem co to tu robi" },
    { name: "Lista-gpt kto jest best gf?" },
    { name: "Lista dźwieki ever" },
    { name: "Lista" },
    { name: "Lista" },
    { name: "Lista" },
  ];

  const [selectedFolderIndex, setSelectedFolderIndex] = useState(0);

  const handleFolderSelection = (index) => {
    setSelectedFolderIndex(index);
  };
  return (
    <div className={classes.ChatGptWrapper}>
      <div className={classes.TitleBar}>
        <div className={classes.Title}>Lista (nie ma)</div>
        <div className={classes.Icons}>
          <div className={classes.CloseButton}>✕</div>
        </div>
      </div>
    </div>
  );
}

export default Lista;
