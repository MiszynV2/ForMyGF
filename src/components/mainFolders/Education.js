import React, { useState, useEffect } from "react";
import classes from "./Education.module.css";
import text from "../../sources/images/experience.png";
import CloseButton from "../../sources/close.svg";
import paperclip from "../../sources/paperclip.png";
import cloud from "../../sources/dymek.png";

function Education({ handleFolderSelection }) {
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
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className={classes.TitleBar}>
        <img src={text} className={classes.FolderLogo} alt="folder" />
        <div className={classes.Title}>Education</div>

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
      <div className={classes.ContentWrapper}>
        <ul className={classes.UlMain}>
          <li>Szczecińskie collegium informatyczne</li>

          <ul className={classes.UlBeta}>
            <li>Programming</li>
            <li>Linux</li>
            <li>Project management</li>
          </ul>
        </ul>
        <div className={classes.TextPaperClip}>
          <img
            className={classes.CloudPaperClip}
            alt="text cloud"
            src={cloud}
          ></img>
          <span className={classes.Text}>
            Throughout my education, I honed my programming skills through
            challenging task assignments and extracurricular activities such as
            programming workshops and hackathons. These experiences have given
            me a strong foundation in programming and problem-solving,
            empowering me to approach complex technical challenges with
            confidence and innovation.
          </span>
          <img
            className={classes.ImagePaperClip}
            alt="paper clip"
            src={paperclip}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Education;
