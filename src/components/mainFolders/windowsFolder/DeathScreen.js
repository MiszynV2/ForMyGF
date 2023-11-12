import React, { useState } from "react";
import classes from "./DeathScreen.module.css";
import Duck from "../../../sources/duckDead.png";

function DeathScreen({ setIsDead, highestPoints, points }) {
  return (
    <div className={classes.DeathScreen}>
      <div className={classes.Window}>
        <div className={classes.Content}>
          <img className={classes.DuckImage} src={Duck} alt="Duck" />
          <h1 className={classes.DeathText}>Game Over</h1>
          <h2 className={classes.DeathSubtextPoints}>Points: {points}</h2>

          <h2 className={classes.DeathSubtextHighscore}>
            Highscore: {highestPoints}
          </h2>
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
