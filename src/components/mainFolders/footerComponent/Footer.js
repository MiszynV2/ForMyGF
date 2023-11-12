import React, { useState, useEffect, useRef } from "react";
import classes from "./Footer.module.css";
import windowsLogo from "../../../sources/windowsLogo.png";
import UserMenu from "./UserMenu";
import FooterWindowsItem from "./FooterWindowItem";
import FooterOptionsWrapper from "./FooterOptionsWrapper";

function Footer({
  activeWindowsId,
  clickedWindow,
  setClickedWindow,
  setActiveWindowsId,
  windows_data,
}) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const userMenuRef = useRef(null);

  function handleUserMenuOptions() {
    const isVisible = !isMenuVisible;
    setIsMenuVisible(isVisible);
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
        {isMenuVisible && (
          <UserMenu
            activeWindowsId={activeWindowsId}
            setActiveWindowsId={setActiveWindowsId}
            clickedWindow={clickedWindow}
            setClickedWindow={setClickedWindow}
            onClose={handleUserMenuOptions}
          />
        )}
      </div>
      <div className={classes.FooterWindowsItemWrapper}>
        {activeWindowsId.map((window) => {
          console.log({ window });
          const windowData = windows_data.find(
            (element) => element.id === window
          );
          console.log({ windowData });

          return (
            <FooterWindowsItem
              clickedWindow={clickedWindow}
              activeWindowsId={activeWindowsId}
              setClickedWindow={setClickedWindow}
              title={windowData.id}
              icon={windowData.icon}
            />
          );
        })}
      </div>
      <FooterOptionsWrapper />
    </div>
  );
}

export default Footer;
