import React from "react";
import classes from "./Duck.module.css";
import Game from "./Game";
import Window from "../Atoms/Window";
import image from "../../sources/duck.png";
import TitleBar from "../Atoms/TitleBar";

function Duck({ close }) {
  const title = "Duck.exe";
  return (
    <Window>
      <TitleBar image={image} title={title} close={close} />
      <div className={classes.ButtonImageWrapper}>
        <Game />
      </div>
    </Window>
  );
}

export default Duck;
