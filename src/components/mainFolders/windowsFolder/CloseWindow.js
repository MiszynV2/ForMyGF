import React, { useState } from "react";
import classes from "./CloseWindow.module.css";
import CloseButton from "../../../sources/close.svg";
import TurnoffButton from "../../../sources/turnoff.png";
import Restart from "../../../sources/restart.ico";
import windowsLogo from "../../../sources/windowsLogo.png";

function CloseWindow({ onCancelClick }) {
  return (
    <div className={classes.AllScreen}>
      <div className={classes.Filter}></div>
      <div className={classes.Wrapper}>
        <div className={classes.TopSection}>
          <span>Turn off computer</span>
          <img alt="windows logo" src={windowsLogo} />
        </div>
        <div className={classes.MiddleSection}>
          <div className={classes.buttonWrapper}>
            <img alt="stand by logo" src={CloseButton} />
            <span>Stand By</span>
          </div>
          <div className={classes.buttonWrapper}>
            <img alt="turn off logo" src={TurnoffButton} />
            <span>Turn Off</span>
          </div>
          <div className={classes.buttonWrapper}>
            <img alt="Restart logo" src={Restart} />
            <span>Restart</span>
          </div>
        </div>
        <div className={classes.BottomSection}>
          <button onClick={onCancelClick}>
            <span>Cancel</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CloseWindow;
