import React, { useState } from "react";
import classes from "./MainFolder.module.css";
import FolderMainItem from "./FolderMainItem";

function Najlepsza() {
  const FolderNames = [
    { name: "NajlepszaNajlepsza bff (nie otwierać)" },
    { name: "NajlepszaNajlepsza cie" },
    { name: "Sam NajlepszaNajlepsza Colby!?!?" },
    { name: "NajlepszaNajlepsza do zrobienia z kodą" },
    { name: "nie NajlepszaNajlepsza co to tu robi" },
    { name: "NajlepszaNajlepsza-gpt kto jest best gf?" },
    { name: "NajlepszaNajlepsza dźwieki ever" },
    { name: "NajlepszaNajlepsza" },
    { name: "NajlepszaNajlepsza" },
    { name: "NajlepszaNajlepsza" },
  ];

  const [selectedFolderIndex, setSelectedFolderIndex] = useState(0);

  const handleFolderSelection = (index) => {
    setSelectedFolderIndex(index);
  };

  return (
    <div className={classes.ChatGptWrapper}>
      <div className={classes.TitleBar}>
        <div className={classes.Title}>Najlepsza (nie ma)</div>
        <div className={classes.Icons}>
          <div className={classes.CloseButton}>✕</div>
        </div>
      </div>
    </div>
  );
}

export default Najlepsza;
