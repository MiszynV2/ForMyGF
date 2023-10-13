import React from "react";
import classes from "./Duck.module.css";
import Game from "./Game";
import Window from "../Atoms/Window";
import image from "../../sources/duck.png";
import TitleBar from "../Atoms/TitleBar";
import Options from "../Atoms/Options";

function Duck({ close }) {
  const title = "Duck.exe";
  return (
    <Window width={650}>
      <TitleBar image={image} title={title} close={close} />
      <Options options={["To play use WSAD or ARROW keys"]} />
      <div className={classes.ButtonImageWrapper}>
        <Game />
      </div>
    </Window>
  );
}

export default Duck;
