import React, { useState } from "react";
import classes from "./Computer.module.css";
import Window from "../Atoms/Window";
import image from "../../sources/images/computer.png";
import TitleBar from "../Atoms/TitleBar";
import Options from "../Atoms/Options";
import ComputerNavSection from "../Atoms/ComputerNavSection";
import ComputerRightSection from "../Atoms/ComputerRightSection";
import ComputerOptions from "../Atoms/ComputerOptions";

function Computer({ close }) {
  const title = "My Computer";
  const options = ["File", "Edit", "View", "Favorites", "Tools", "Help"];

  return (
    <Window width={660}>
      <TitleBar image={image} title={title} close={close} />
      <div className={classes.Wrapper}>
        <Options options={options} />
        <ComputerOptions />

        <div className={classes.SectionWrapper}>
          <ComputerNavSection />

          <ComputerRightSection />
        </div>
      </div>
    </Window>
  );
}

export default Computer;
