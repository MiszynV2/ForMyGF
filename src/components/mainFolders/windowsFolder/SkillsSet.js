import React from "react";
import PropTypes from "prop-types";
import classes from "./SkillsSet.module.css";
import image from "../../../sources/check.svg";
import Window from "../../Atoms/Window";
import TitleBar from "../../Atoms/TitleBar";
import Options from "../../Atoms/Options";

const SKILLSET_DATA = [
  { htmlFor: "react", text: "react.js" },
  { htmlFor: "html", text: "html" },
  { htmlFor: "css", text: "css" },
  { htmlFor: "fast", text: "fast learner" },
  { htmlFor: "minded", text: "open minded" },
  { htmlFor: "people", text: "open for people" },
];
function SkillsSet({ close, minimalize }) {
  const options = ["File", "Edit", "Format", "View", "Help"];
  const title = "Skills Set";
  return (
    <Window>
      <TitleBar
        minimalize={minimalize}
        image={image}
        title={title}
        close={close}
      />
      <div className={classes.TextWrapper}>
        <Options options={options} />

        <div className={classes.UlWrapper}>
          <h1 className={classes.Title}>My Skills set:</h1>
          {SKILLSET_DATA.map((element, index) => {
            return (
              <div key={index}>
                <input
                  className={classes.InputReact}
                  type="checkbox"
                  htmlFor={element.htmlFor}
                ></input>
                <label className={classes.LabelReact} htmlFor={element.htmlFor}>
                  {element.text}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </Window>
  );
}
SkillsSet.propTypes = {
  close: PropTypes.func.isRequired,
  minimalize: PropTypes.func.isRequired,
};

export default SkillsSet;
