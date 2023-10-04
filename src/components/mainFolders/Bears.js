import React from "react";
import classes from "./Bears.module.css";
import Game from "./Game";
import Window from "../Atoms/Window";
import image from "../../sources/duck.png";
import TitleBar from "../Atoms/TitleBar";

function Bears({ handleFolderSelection }) {
  const title = "Duck.exe";
  return (
    <Window>
      <TitleBar
        image={image}
        title={title}
        handleFolderSelection={handleFolderSelection}
      />
      <div className={classes.ButtonImageWrapper}>
        <Game />
      </div>
    </Window>
  );
}

export default Bears;
