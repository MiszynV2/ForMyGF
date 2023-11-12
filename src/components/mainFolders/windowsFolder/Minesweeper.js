import React, { useEffect, useState } from "react";
import classes from "./Minesweeper.module.css";
import MinesweeperLogo from "../../../sources/minesweeper.png";
import Window from "../../Atoms/Window";
import TitleBar from "../../Atoms/TitleBar";
import MinesweeperGame from "./MinesweeperGame";
import MinesweeperOptions from "../../Atoms/MinesweeperOptions";

function Minesweeper({ close }) {
  const [Restart, SetRestart] = useState(true);
  const [GameMod, SetGameMod] = useState("Easy");
  const [Width, SetWidth] = useState(250);

  const [GameOptions, SetGameOptions] = useState([8, 8, 10]);

  const options = ["Game", "Help", "Easy", "Medium", "Hard"];
  const title = "Minesweeper";
  function handleRestart() {
    SetRestart(!Restart);
  }

  function handleGameMod(title) {
    SetGameMod(title);
    if (title === "Easy") {
      SetWidth(250);
      SetGameOptions([8, 8, 10]);
    } else if (title === "Medium") {
      SetWidth(420);

      SetGameOptions([16, 16, 40]);
    } else if (title === "Hard") {
      SetWidth(750);
      SetGameOptions([16, 30, 99]);
    }
  }

  return (
    <Window width={Width}>
      <TitleBar image={MinesweeperLogo} title={title} close={close} />
      <div className={classes.TextWrapper}>
        <MinesweeperOptions SetTitle={handleGameMod} options={options} />
        {!Restart && (
          <MinesweeperGame GameOptions={GameOptions} Restart={handleRestart} />
        )}
        {Restart && (
          <MinesweeperGame GameOptions={GameOptions} Restart={handleRestart} />
        )}{" "}
      </div>
    </Window>
  );
}

export default Minesweeper;
