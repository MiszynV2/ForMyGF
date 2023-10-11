import React, { useState, useEffect, useRef } from "react";
import classes from "./Footer.module.css";
import windowsLogo from "../../../sources/windowsLogo.png";
import UserMenu from "./UserMenu";
import FooterWindowsItem from "./FooterWindowItem";

function Footer({ activeWindowsId, clickedWindow, setClickedWindow }) {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const userMenuRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function handleUserMenuOptions() {
    const isVisible = !isMenuVisible;
    setIsMenuVisible(isVisible);
  }

  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setIsMenuVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className={classes.FooterWrapper}>
      <button
        onClick={handleUserMenuOptions}
        className={classes.FooterStartButton}
      >
        <img
          className={classes.FooterStartButtonImage}
          src={windowsLogo}
          alt="windows logo"
        />
        <span>Start</span>
      </button>
      <div ref={userMenuRef}>
        {isMenuVisible && <UserMenu onClose={handleUserMenuOptions} />}
      </div>
      <div className={classes.FooterWindowsItemWrapper}>
        {activeWindowsId.map((window) => {
          return (
            <FooterWindowsItem
              clickedWindow={clickedWindow}
              activeWindowsId={activeWindowsId}
              setClickedWindow={setClickedWindow}
              title={window}
            />
          );
        })}
      </div>
      <div className={classes.FooterOptionsWrapper}>
        <div className={classes.FooterOptions}>
          <img
            className={classes.FooterStartSound}
            src={windowsLogo}
            alt="windows logo"
          />
          <img
            className={classes.FooterStartAntivirus}
            src={windowsLogo}
            alt="windows logo"
          />
          <img
            className={classes.FooterStartInternet}
            src={windowsLogo}
            alt="windows logo"
          />
        </div>
        <span className={classes.CurrentTime}>{getCurrentTime()}</span>
      </div>
    </div>
  );
}

export default Footer;
