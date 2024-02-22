import React from "react";
import classes from "./ChangeWallpaper.module.css";
import image from "../../../../sources/images/Options.png";
import Window from "../../../Atoms/Window";
import Options from "../../../Atoms/Options";
import TitleBar from "../../../Atoms/TitleBar";
import DesktopOptions from "./DesktopOptions";

function ChangeWallpaper({ close }) {
  const options = [
    "Themes",
    "Desktop",
    "Screen Saver",
    "Appearance",
    "Settings",
  ];
  const title = "Wallpaper Options";
  return (
    <Window height={700}>
      <TitleBar image={image} title={title} close={close} />
      <Options options={options} />
      <DesktopOptions />
      <div className={classes.changeWallpaperButton}>
        <button>OK</button>
        <button>Cancel</button>
        <button>Apply</button>
      </div>
    </Window>
  );
}

export default ChangeWallpaper;
