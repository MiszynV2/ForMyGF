import React, { useState } from "react";
import classes from "./Computer.module.css";
import Window from "../Atoms/Window";
import image from "../../sources/images/computer.png";
import TitleBar from "../Atoms/TitleBar";
import Options from "../Atoms/Options";

function Computer({ close }) {
  const title = "My Computer";
  const options = ["File", "Edit", "View", "Favorites", "Tools", "Help"];
  return (
    <Window width={660}>
      <TitleBar image={image} title={title} close={close} />
      <div className={classes.Wrapper}>
        <Options options={options} />
        <div className={classes.SectionWrapper}>
          <div className={classes.NavSection}>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className={classes.RightSection}>
            <div></div>
          </div>
        </div>
      </div>
    </Window>
  );
}

export default Computer;
