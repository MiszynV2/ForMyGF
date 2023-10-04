import React, { useState, useEffect } from "react";
import classes from "./ChangeBg.module.css";
import tapeta1 from "../../sources/tapeta.jpg";
import tapeta2 from "../../sources/tapeta2.jpg";
import tapeta4 from "../../sources/tapeta4.jpg";
import tapeta5 from "../../sources/tapeta5.jpg";
import tapeta6 from "../../sources/tapeta6.jpg";

function ChangeBg({ handleFolderSelection }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [selectedBg, setSelectedBg] = useState(tapeta1);

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

  const handleBgChange = (bg) => {
    setSelectedBg(bg);
  };

  useEffect(() => {
    document.body.style.backgroundImage = `url(${selectedBg})`;
    return () => {};
  }, [selectedBg]);

  return (
    <div
      className={classes.ChangeBgWrapper}
      style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className={classes.ChangeBgTitleBar}>
        <div className={classes.ChangeBgTitle}>Change the background image</div>
        <div className={classes.ChangeBgIcons}>
          <div
            className={classes.ChangeBgCloseButton}
            onClick={() => {
              handleFolderSelection(0);
            }}
          >
            ✕
          </div>
        </div>
      </div>
      <div className={classes.ChangeBgOptions}>
        <div
          className={classes.ChangeBgOption}
          onClick={() => handleBgChange(tapeta1)}
        >
          Tapeta 1
        </div>
        <div
          className={classes.ChangeBgOption}
          onClick={() => handleBgChange(tapeta2)}
        >
          Tapeta 2
        </div>
        <div
          className={classes.ChangeBgOption}
          onClick={() => handleBgChange(tapeta5)}
        >
          Tapeta 3
        </div>
        <div
          className={classes.ChangeBgOption}
          onClick={() => handleBgChange(tapeta6)}
        >
          Tapeta 4
        </div>
        <div
          className={classes.ChangeBgOption}
          onClick={() => handleBgChange(tapeta4)}
        >
          Tapeta 5
        </div>
        <div
          className={classes.ChangeBgOption}
          onClick={() => handleBgChange(tapeta6)}
        >
          Tapeta 6
        </div>
      </div>
    </div>
  );
}

export default ChangeBg;
