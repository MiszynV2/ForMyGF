import React, { useState, useEffect } from "react";
import classes from "./Industry.module.css";
import text from "../../sources/images/text.png";
import CloseButton from "../../sources/close.svg";

function Industry({ handleFolderSelection }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

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
    >
      <div
        className={classes.TitleBar}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <img src={text} className={classes.FolderLogo} alt="folder" />
        <div className={classes.Title}>Industry Knowledge</div>

        <button
          onClick={handleCloseClick}
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
    </div>
  );
}

export default Industry;
