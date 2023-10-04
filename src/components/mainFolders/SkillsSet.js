import React from "react";
import classes from "./SkillsSet.module.css";
import text from "../../sources/images/text.png";
import CloseButton from "../../sources/close.svg";
import Window from "../Atoms/Window";

function SkillsSet({ handleFolderSelection }) {
  return (
    <Window>
      <div className={classes.TitleBar}>
        <img src={text} className={classes.FolderLogo} alt="folder" />
        <div className={classes.Title}>Skills Set</div>

        <button
          onClick={() => {
            handleFolderSelection(0);
          }}
          src={CloseButton}
          className={classes.CloseButton}
        />
      </div>
      <ul className={classes.Options}>
        <il className={classes.OptionsFile}>File</il>
        <il className={classes.OptionsEdit}>Edit</il>
        <il className={classes.OptionsFormat}>Format</il>
        <il className={classes.OptionsView}>View</il>
        <il className={classes.OptionsHelp}>Help</il>
      </ul>
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
