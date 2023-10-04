import React from "react";
import classes from "./SkillsSet.module.css";
import image from "../../sources/check.svg";
import CloseButton from "../../sources/close.svg";
import Window from "../Atoms/Window";
import TitleBar from "../Atoms/TitleBar";
import Options from "../Atoms/Options";

function SkillsSet({ handleFolderSelection }) {
  const options = ["File", "Edit", "Format", "View", "Help"];
  const title = "Skills Set";
  return (
    <Window>
      <TitleBar
        image={image}
        title={title}
        handleFolderSelection={handleFolderSelection}
      />
      <Options options={options} />
      <div className={classes.TextWrapper}>
        <div>
          <input
            className={classes.InputReact}
            checked
            type="checkbox"
            htmlFor="react"
          ></input>
          <label className={classes.LabelReact} for="react">
            react.js
          </label>
        </div>
        <div>
          <input
            className={classes.InputHtml}
            checked
            type="checkbox"
            htmlFor="html"
          ></input>
          <label className={classes.LabelHtml} for="html">
            html
          </label>
        </div>
        <div>
          <input
            className={classes.InputCss}
            checked
            type="checkbox"
            htmlFor="css"
          ></input>
          <label className={classes.LabelCss} for="css">
            css
          </label>
        </div>
        <div>
          <input
            className={classes.InputFast}
            checked
            type="checkbox"
            htmlFor="fast"
          ></input>
          <label className={classes.LabelFast} for="fast">
            fast learner
          </label>
        </div>
        <div>
          <input
            className={classes.InputMinded}
            checked
            type="checkbox"
            htmlFor="minded"
          ></input>
          <label className={classes.LabelReact} for="minded">
            open minded
          </label>
        </div>
        <div>
          <input
            className={classes.InputPeople}
            checked
            type="checkbox"
            htmlFor="people"
          ></input>
          <label className={classes.LabelPeople} for="people">
            open for people
          </label>
        </div>
      </div>
    </Window>
  );
}

export default SkillsSet;
