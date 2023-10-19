import React, { useState } from "react";
import classes from "./Minesweeper.module.css";
import MinesweeperLogo from "./../sources/minesweeper.png";
import Window from "./Atoms/Window";
import TitleBar from "./Atoms/TitleBar";
import Options from "./Atoms/Options";
import MinesweeperGame from "./MinesweeperGame";
import repeat from "../sources/repeat.svg";

function Minesweeper({ close }) {
  const [Restart, SetRestart] = useState(true);
  const [GameMod, SetGameMod] = useState("Easy");
  const [GameOptions, SetGameOptions] = useState([8, 8, 10]);

  const options = ["Game", "Help", "Easy", "Medium", "Hard"];
  const title = "Minesweeper";
  function handleRestart() {
    SetRestart(!Restart);
    console.log({ Restart });
  }

  return (
    <Window width={250}>
      <TitleBar image={MinesweeperLogo} title={title} close={close} />
      <div className={classes.TextWrapper}>
        <Options options={options} />
        {!Restart && <MinesweeperGame Restart={handleRestart} />}
        {Restart && <MinesweeperGame Restart={handleRestart} />}{" "}
      </div>
    </Window>
  );
}

export default Minesweeper;
