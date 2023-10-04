import React from "react";
import classes from "./Contact.module.css";

import Window from "../Atoms/Window";

function Lista({ handleFolderSelection }) {
  return (
    <Window>
      <div className={classes.TitleBar}>
        <div className={classes.Title}>Lista (nie ma) ale jeszcze będzie"</div>
        <div className={classes.Icons}>
          <div
            className={classes.CloseButton}
            onClick={() => {
              handleFolderSelection(0);
            }}
          ></div>
        </div>
      </div>
    </Window>
  );
}

export default Lista;
