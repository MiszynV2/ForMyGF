import React, { useEffect, useState } from "react";
import classes from "./Minesweeper.module.css";
import MinesweeperLogo from "../../../../sources/minesweeper.png";
import borderSides from "../../../../sources/images/saper/borderWrapperSides.png";
import borderBottom from "../../../../sources/images/saper/borderWrapperBottom.png";
import smileyFace from "../../../../sources/images/saper/smileyFace.png";
import borderTopRight from "../../../../sources/images/saper/borderWrapperTopRight.png";
import borderTopLeft from "../../../../sources/images/saper/borderWrapperTopLeft.png";
import borderIntersectionLeft from "../../../../sources/images/saper/borderWrapperIntersectionLeft.png";
import borderIntersectionRight from "../../../../sources/images/saper/borderWrapperIntersectionRight.png";

import Window from "../../../Atoms/Window";
import TitleBar from "../../../Atoms/TitleBar";
import MinesweeperGame from "./MinesweeperGame";
import MinesweeperOptions from "../../../Atoms/MinesweeperOptions";

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

        <div className={classes.BorderBottomImageWrapper}>
          <div className={classes.ScoreWrapper}>
            <img
              alt=""
              src={borderTopLeft}
              className={classes.borderTopLeftImage}
            />
          </div>

          <img alt="" src={borderBottom} className={classes.BorderTopImage} />

          <div className={classes.BorderBottomImageWrapper}>
            <img
              alt=""
              src={borderTopRight}
              className={classes.borderTopRightImage}
            />
          </div>
        </div>
        <div className={classes.ScoreWrapper}>
          <div className={classes.BorderSidesImageWrapper}>
            <img
              alt=""
              src={borderSides}
              className={classes.BorderSidesImage}
            />
          </div>
          <div className={classes.ScoreDiv}>
            <img alt="" src={smileyFace} className={classes.smileyFaceImage} />
          </div>
          <div className={classes.BorderBottomImageWrapper}>
            <img
              alt=""
              src={borderSides}
              className={classes.BorderSidesImage}
            />
          </div>
        </div>
        <div className={classes.ScoreWrapper}>
          <img
            alt=""
            src={borderIntersectionLeft}
            className={classes.BorderSidesImage}
          />

          <img alt="" src={borderBottom} className={classes.BorderMidImage} />
          <img
            alt=""
            src={borderIntersectionRight}
            className={classes.borderIntersectionRight}
          />
        </div>
        <div className={classes.BorderGameWrapper}>
          <div className={classes.BorderSidesImageWrapper}>
            <img
              alt=""
              src={borderSides}
              className={classes.BorderSidesImage}
            />
          </div>
          {!Restart && (
            <MinesweeperGame
              GameOptions={GameOptions}
              Restart={handleRestart}
            />
          )}
          {Restart && (
            <MinesweeperGame
              GameOptions={GameOptions}
              Restart={handleRestart}
            />
          )}{" "}
          <div className={classes.BorderSidesImageWrapper}>
            <img
              alt=""
              src={borderSides}
              className={classes.BorderSidesImage}
            />
          </div>
        </div>
        <div className={classes.ScoreWrapper}>
          <img
            alt=""
            src={borderTopLeft}
            className={classes.borderBottomRightImage}
          />

          <img
            alt=""
            src={borderBottom}
            className={classes.BorderBottomBotImage}
          />

          <img
            alt=""
            src={borderTopRight}
            className={classes.borderBottomLeftImage}
          />
        </div>
      </div>
    </Window>
  );
}

export default Minesweeper;
