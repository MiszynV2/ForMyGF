import React, { useState, useEffect } from "react";
import classes from "./Bears.module.css";
import misiek from "../../sources/moving-bear.gif";

function Bears({ handleFolderSelection }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [bears, setBears] = useState([]);

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
    const chatGptWrapper = document.getElementById("chat-gpt-wrapper");
    if (chatGptWrapper) {
      const { top, left, right, bottom } =
        chatGptWrapper.getBoundingClientRect();
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

  const addBear = () => {
    const randomX = Math.floor(Math.random() * windowWidth);
    const randomY = Math.floor(Math.random() * windowHeight);
    const randomDirectionX = Math.random() < 0.5 ? 1 : -1;
    const randomDirectionY = Math.random() < 0.5 ? 1 : -1;
    setBears((prevBears) => [
      ...prevBears,
      {
        x: randomX,
        y: randomY,
        directionX: randomDirectionX,
        directionY: randomDirectionY,
      },
    ]);
  };

  const handleSummonBears = () => {
    addBear();
    // Opóźnienie dodawania kolejnych misiów
    for (let i = 1; i < 5; i++) {
      setTimeout(addBear, i * 500); // Dodawaj co 500ms
    }
  };

  return (
    <div
      className={classes.ChatGptWrapper}
      style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className={classes.TitleBar}>
        <div className={classes.Title}>Generator miśków (darmowe)</div>
        <div className={classes.Icons}>
          <div className={classes.CloseButton} onClick={handleCloseClick}>
            ✕
          </div>
        </div>
      </div>
      <div className={classes.ButtonImageWrapper}>
        <button onClick={handleSummonBears}>Przywołaj miśki</button>
        <div className={classes.ImageWrapper}>
          {bears.map((bear, index) => (
            <img
              key={index}
              src={misiek}
              alt="Moving Bear"
              className={`${classes.MovingBear} ${
                bear.directionX === -1 ? classes.Reverse : ""
              }`}
              style={{ top: bear.y, left: bear.x }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bears;
