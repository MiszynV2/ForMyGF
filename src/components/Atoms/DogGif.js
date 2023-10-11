import React from "react";
import classes from "./DogGif.module.css";
import cloud from "../../sources/dymek.png";
import dogo from "../../sources/dogo.gif";

function DogGif() {
  return (
    <div className={classes.CloudPaperClip}>
      <img className={classes.Cloud} alt="text cloud" src={cloud}></img>
      <span className={classes.Text}>
        "Contact me" and "Duck.exe" is now working!
      </span>
      <img alt="dog gif" className={classes.dogoImg} src={dogo} />
    </div>
  );
}

export default DogGif;
