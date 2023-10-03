import React, { useState, useEffect } from "react";
import classes from "./SkillsSet.module.css";
import text from "../../sources/images/text.png";
import CloseButton from "../../sources/close.svg";

function SkillsSet({ handleFolderSelection }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [isChecked, setIsChecked] = useState("checked");

  const handleCloseClick = (e) => {
    handleFolderSelection(0);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX - offsetX);
    setStartY(e.clientY - offsetY);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newOffsetX = e.clientX - startX;
      const newOffsetY = e.clientY - startY;
      setOffsetX(newOffsetX);
      setOffsetY(newOffsetY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  const handleIsChecked = () => {
    if (isChecked === "checked") {
      setIsChecked("");
    } else {
      setIsChecked("checked");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const Wrapper = document.getElementById("chat-gpt-wrapper");
    if (Wrapper) {
      const { top, left, right, bottom } = Wrapper.getBoundingClientRect();
      if (left < 0) {
        setOffsetX(offsetX - left);
      } else if (right > windowWidth) {
        setOffsetX(offsetX - (right - windowWidth));
      }
      if (top < 0) {
        setOffsetY(offsetY - top);
      } else if (bottom > windowHeight) {
        setOffsetY(offsetY - (bottom - windowHeight));
      }
    }
  }, [offsetX, offsetY, windowWidth, windowHeight]);

  return (
    <div
      className={classes.Wrapper}
      style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className={classes.TitleBar}>
        <img src={text} className={classes.FolderLogo} alt="folder" />
        <div className={classes.Title}>Skills Set</div>

        <button
          onClick={handleCloseClick}
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
            {...isChecked}
            onClick={handleIsChecked}
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
            onClick={handleIsChecked}
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
    </div>
  );
}

export default SkillsSet;
