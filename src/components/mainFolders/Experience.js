import React, { useState, useEffect } from "react";
import classes from "./Experience.module.css";
import text from "../../sources/images/education.png";
import CloseButton from "../../sources/close.svg";

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
        <div className={classes.Title}>Experience</div>

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
      <div className={classes.Wrapper}>
        <div className={classes.ContentWrapper}>
          <ul className={classes.UlMain}>
            <li>Salling Group</li>

            <ul className={classes.UlBeta}>
              <li>ServiceNow</li>
              <li>JavaScript</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </ul>
          <span className={classes.Text}>
            As a junior developer I maintained and optimized the ServiceNow
            platform, gaining experience in platform administration, scripting,
            and troubleshooting. I actively sought out opportunities to improve
            the platform and implemented new projects that streamlined processes
            and increased efficiency.
          </span>
        </div>
        <div className={classes.ContentWrapper}>
          <ul className={classes.UlMain}>
            <li>AdCode</li>

            <ul className={classes.UlBeta}>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </ul>
          <span className={classes.Text}>
            As a web developer, my responsibilities included implementing design
            mockups into fully-functional websites for clients. I worked closely
            with designers and project managers to ensure that the websites met
            the client's specifications and provided a seamless user experience
          </span>
        </div>
      </div>
    </div>
  );
}

export default Education;
