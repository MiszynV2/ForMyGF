import React, { useState, useEffect } from "react";
import classes from "./Virus.module.css";
import image from "../../../../sources/images/virus.png";
import critical from "../../../../sources/images/critical.png";
import exeWarning from "../../../../sources/images/exeWarning.png";
import Window from "../../../Atoms/Window";
import bombImage from "../../../../sources/bomb.png";
import TitleBar from "../../../Atoms/TitleBar";

function Virus({ close, minimalize, virus }) {
  const [bombs, setBombs] = useState([]);
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const options = ["File", "Edit", "Format", "View", "Help"];
  const title = "Warning";

  const addBomb = () => {
    const newBomb = {
      id: bombs.length,
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth,
    };
    setBombs((prevBombs) => [...prevBombs, newBomb]);
  };

  const handleVirus = () => {
    virus();
    if (isVisible) {
      setIsVisible(false);
      setIsAnimating(true);
    }
  };

  const autoGenerateBomb = () => {
    if (!isVisible) {
      addBomb();
    }
  };

  useEffect(() => {
    const autoGenerateInterval = setInterval(autoGenerateBomb, 50);
    return () => clearInterval(autoGenerateInterval);
  }, [isVisible]);

  useEffect(() => {
    if (isAnimating) {
      const animationTimeout = setTimeout(() => {
        setIsAnimating(false);
      }, 5000);
      return () => clearTimeout(animationTimeout);
    }
  }, [isAnimating]);

  return (
    <>
      <Window style={{ display: isVisible ? "block" : "none" }}>
        <TitleBar
          minimalize={minimalize}
          image={image}
          title={title}
          close={close}
        />
        <div className={classes.TextWrapper}>
          <div>
            <img className={classes.WarningImg} src={critical} alt="" />
          </div>

          <span className={classes.WarningText}>
            The publisher could not be verified. Are you sure you want to run
            this software?
          </span>
        </div>
        <div className={classes.ButtonWrapper}>
          <button onClick={handleVirus}>Yes</button>
          <button onClick={close}>No</button>
        </div>
      </Window>
      <div className={classes.BombsWrapper}>
        {bombs.map((bomb) => (
          <img
            key={bomb.id + 3}
            className={classes.Bomb}
            src={bombImage}
            alt=""
            style={{ top: bomb.top, left: bomb.left, position: "absolute" }}
          />
        ))}
      </div>
    </>
  );
}

export default Virus;
