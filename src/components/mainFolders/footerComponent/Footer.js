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
  windowsData,
  setWindowsData,
}) {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const userMenuRef = useRef(null);

  function handleUserMenuOptions() {
    setIsMenuVisible((prev) => !prev);
  }

  const minimizedWindows = windowsData.filter((window) => window.IsMinimalize);

  function handleToggleWindow(windowId) {
    setWindowsData((prevState) =>
      prevState.map((item) =>
        item.id === windowId
          ? { ...item, IsMinimalize: !item.IsMinimalize }
          : item
      )
    );

    setActiveWindowsId((prevState) => {
      const newActiveWindows = !windowsData.find(
        (window) => window.id === windowId
      ).IsMinimalize
        ? prevState.filter((id) => id !== windowId)
        : [...new Set([...prevState, windowId])];
      return newActiveWindows;
    });

    setClickedWindow(windowId);
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
  }, []);

  const footerItems = [
    ...new Set([
      ...activeWindowsId,
      ...minimizedWindows.map((window) => window.id),
    ]),
  ];
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
        {footerItems.map((windowId) => {
          const windowData = windowsData.find(
            (element) => element.id === windowId
          );

          return (
            <FooterWindowsItem
              key={windowId}
              onClick={() => handleToggleWindow(windowId)}
              clickedWindow={clickedWindow}
              setClickedWindow={setClickedWindow}
              title={windowData.name}
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
