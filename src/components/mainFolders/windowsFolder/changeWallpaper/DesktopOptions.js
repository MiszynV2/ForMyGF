import React from "react";
import classes from "./DesktopOptions.module.css";
import screen from "../../../../sources/images/wallpapers/screen.png";

function DesktopOptions() {
  return (
    <div className={classes.desktopOptionsWrapper}>
      <div className={classes.ExampleWallpaperWrapper}>
        <img className={classes.TextWrapper} src={screen} alt="" />
      </div>
      <div className={classes.backgroundOptions}>
        <div className={classes.basicBackgroundOptions}>
          <span>Background:</span>

          <ul className={classes.backgroundsList}>
            <li>Stretch</li>
            <li>Stretch</li>
            <li>Stretch</li>
            <li>Stretch</li>
            <li>Stretch</li>
            <li>Stretch</li>
          </ul>

          <button>
            <span>Customize Desktop...</span>
          </button>
        </div>
        <div className={classes.specificBackgroundOptions}>
          <button>Browse...</button>
          <select className={classes.specificBackgroundOptionsSize}>
            <option>Stretch</option>
            <option>Normal</option>
            <option>Reversed</option>
            <option>Negative</option>
          </select>
          <input className={classes.colorChangeInput} type="color"></input>
        </div>
      </div>
    </div>
  );
}

export default DesktopOptions;
