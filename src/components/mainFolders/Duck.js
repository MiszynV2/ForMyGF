import React, { useState } from "react";
import classes from "./Duck.module.css";
import Game from "./Game";
import Window from "../Atoms/Window";
import image from "../../sources/duck.png";
import TitleBar from "../Atoms/TitleBar";
import Options from "../Atoms/Options";
import DeathScreen from "../DeathScreen";

function Duck({ close }) {
  const title = "Duck.exe";
  const [isDead, setIsDead] = useState(false);
  const [highestPoints, setHighestPoints] = useState(0);
  const [points, setPoints] = useState(0);
  return (
    <Window width={650}>
      <TitleBar image={image} title={title} close={close} />
      <Options options={["To play use WSAD or ARROW keys"]} />
      <div className={classes.ButtonImageWrapper}>
        {!isDead && (
          <Game
            points={points}
            setPoints={setPoints}
            isDead={isDead}
            setIsDead={setIsDead}
            setHighestPoints={setHighestPoints}
            highestPoints={highestPoints}
          />
        )}
        {isDead && (
          <DeathScreen
            points={points}
            highestPoints={highestPoints}
            setIsDead={setIsDead}
          />
        )}
      </div>
    </Window>
  );
}

export default Duck;
