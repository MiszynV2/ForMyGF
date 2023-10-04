import React from "react";
import classes from "./Industry.module.css";
import text from "../../sources/images/text.png";
import CloseButton from "../../sources/close.svg";
import Window from "../Atoms/Window";

function Industry({ handleFolderSelection }) {
  return (
    <Window>
      <div className={classes.TitleBar}>
        <img src={text} className={classes.FolderLogo} alt="folder" />
        <div className={classes.Title}>Industry Knowledge</div>

        <button
          onClick={() => {
            handleFolderSelection(0);
          }}
          src={CloseButton}
          className={classes.CloseButton}
        />
      </div>
      <ul className={classes.Options}>
        <il className={classes.OptionsFile}>Options</il>
        <il className={classes.OptionsEdit}>Help</il>
      </ul>
      <div className={classes.SlidesWrapper}>
        <div className={classes.Slide}>
          <label htmlFor="range20">Frontend</label>
          <div className={classes.InputWrapper}>
            <input
              type="range"
              id="range20"
              min="1"
              max="20"
              step="5"
              value="16"
            />
          </div>
        </div>
        <div className={classes.Slide}>
          <label htmlFor="range20">Backend</label>
          <div className={classes.InputWrapper}>
            <input
              type="range"
              id="range20"
              min="1"
              max="20"
              step="5"
              value="10"
            />
          </div>
        </div>
        <div className={classes.Slide}>
          <label htmlFor="range20">Product Design</label>
          <div className={classes.InputWrapper}>
            <input
              type="range"
              id="range20"
              min="1"
              max="20"
              step="5"
              value="6"
            />
          </div>
        </div>
        <div className={classes.Slide}>
          <label htmlFor="range20">Agile</label>
          <div className={classes.InputWrapper}>
            <input
              type="range"
              id="range20"
              min="1"
              max="20"
              step="5"
              value="8"
            />
          </div>
        </div>
        <div className={classes.Slide}>
          <label htmlFor="range20">Scrum</label>
          <div className={classes.InputWrapper}>
            <input
              type="range"
              id="range20"
              min="1"
              max="20"
              step="1"
              value="8"
            />
          </div>
        </div>
        <div className={classes.Slide}>
          <label htmlFor="range20">UX</label>
          <div className={classes.InputWrapper}>
            <input
              type="range"
              id="range20"
              min="1"
              max="20"
              step="5"
              value="7"
            />
          </div>
        </div>
      </div>
    </Window>
  );
}

export default Industry;
