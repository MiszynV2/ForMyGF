import React from "react";
import classes from "./Industry.module.css";
import image from "../../../sources/setting.svg";

import Window from "../../Atoms/Window";
import Options from "../../Atoms/Options";
import TitleBar from "../../Atoms/TitleBar";

function Industry({ close }) {
  const options = ["Options", "Help"];
  const values = [
    ["16", "Frontend"],
    ["10", "Backend"],
    ["6", "Product Design"],
    ["8", "Agile"],
    ["8", "Scrum"],
    ["7", "UX"],
  ];
  const title = "Industry knowledge";

  return (
    <Window>
      <TitleBar image={image} title={title} close={close} />
      <Options options={options} />
      <div className={classes.SlidesWrapper}>
        {values.map((range) => {
          return (
            <div className={classes.Slide}>
              <label htmlFor="range20">{range[1]}</label>
              <div className={classes.InputWrapper}>
                <input
                  type="range"
                  id="range20"
                  min="1"
                  max="20"
                  step="5"
                  value={range[0]}
                />
              </div>
            </div>
          );
        })}
      </div>
    </Window>
  );
}

export default Industry;
