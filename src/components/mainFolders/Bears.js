import React from "react";
import classes from "./Bears.module.css";
import Game from "./Game";
import Window from "../Atoms/Window";

function Bears({ handleFolderSelection }) {
  return (
    <Window>
      <div className={classes.TitleBar}>
        <div className={classes.Title}>Duck.exe</div>
        <div className={classes.Icons}>
          <div
            className={classes.CloseButton}
            onClick={() => {
              handleFolderSelection(0);
            }}
          ></div>
        </div>
      </div>
      <div className={classes.ButtonImageWrapper}>
        <Game />
      </div>
    </Window>
  );
}

export default Bears;
