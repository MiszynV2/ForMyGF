import React, { useState } from "react";
import classes from "./DeathScreen.module.css";
import CloseButton from "./../sources/close.svg";
import TurnoffButton from "./../sources/turnoff.png";
import Restart from "./../sources/restart.ico";
import windowsLogo from "./../sources/windowsLogo.png";
import Duck from "./../sources/duckDead.png";

function DeathScreen({ setIsDead }) {
  return (
    <div className={classes.DeathScreen}>
      <div className={classes.Window}>
        <div className={classes.Content}>
          <img className={classes.DuckImage} src={Duck} alt="Duck" />
          <h1 className={classes.DeathText}>Game Over</h1>
          <button
            className={classes.RestartButton}
            onClick={() => setIsDead(false)}
          >
            Restart
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeathScreen;
