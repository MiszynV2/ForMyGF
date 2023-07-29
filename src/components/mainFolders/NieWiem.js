import React, { useState } from "react";
import classes from "./MainFolder.module.css";
import FolderMainItem from "./FolderMainItem";

function NieWiem() {
  const FolderNames = [
    { name: "NieWiemNajlepsza bff (nie otwierać)" },
    { name: "NieWiemNajlepsza cie" },
    { name: "NieWiemNajlepsza and Colby!?!?" },
    { name: "NieWiemNajlepsza do zrobienia z kodą" },
    { name: "NieWiemNajlepsza wiem co to tu robi" },
    { name: "NieWiemNajlepsza-gpt kto jest best gf?" },
    { name: "NieWiemNajlepsza dźwieki ever" },
    { name: "NieWiemNajlepsza" },
    { name: "NieWiemNajlepsza" },
    { name: "NieWiemNajlepsza" },
  ];

  const [selectedFolderIndex, setSelectedFolderIndex] = useState(0);

  const handleFolderSelection = (index) => {
    setSelectedFolderIndex(index);
  };

  return (
    <div className={classes.ChatGptWrapper}>
      <div className={classes.TitleBar}>
        <div className={classes.Title}>NieWiem (nie ma)</div>
        <div className={classes.Icons}>
          <div className={classes.CloseButton}>✕</div>
        </div>
      </div>
    </div>
  );
}

export default NieWiem;
