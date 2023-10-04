import React from "react";
import classes from "./Contact.module.css";
import image from "../../sources/images/experience.png";
import Window from "../Atoms/Window";
import TitleBar from "../Atoms/TitleBar";

function Lista({ handleFolderSelection }) {
  const title = "Lista";

  return (
    <Window>
      <TitleBar
        image={image}
        title={title}
        handleFolderSelection={handleFolderSelection}
      />
    </Window>
  );
}

export default Lista;
