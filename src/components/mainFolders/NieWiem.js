import React, { useState, useEffect } from "react";
import classes from "./MainFolder.module.css";
import FolderMainItem from "./FolderMainItem";
import blog1 from "../../sources/2023-07-30.png";
import blog2 from "../../sources/2023-07-31.png";

function NieWiem({ handleFolderSelection }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [windows, setWindows] = useState([
    { id: 1, offsetX: 0, offsetY: 0, isOpen: true },
    { id: 2, offsetX: 0, offsetY: 0, isOpen: true },
  ]);

  const handleCloseClick = (windowId) => {
    setWindows((prevWindows) =>
      prevWindows.map((window) =>
        window.id === windowId ? { ...window, isOpen: false } : window
      )
    );
  };

  const handleMouseDown = (e, windowId) => {
    setWindows((prevWindows) =>
      prevWindows.map((window) =>
        window.id === windowId
          ? {
              ...window,
              isDragging: true,
              startX: e.clientX - window.offsetX,
              startY: e.clientY - window.offsetY,
            }
          : window
      )
    );
    e.preventDefault();
  };

  const handleMouseMove = (e, windowId) => {
    setWindows((prevWindows) =>
      prevWindows.map((window) =>
        window.isDragging && window.id === windowId
          ? {
              ...window,
              offsetX: e.clientX - window.startX,
              offsetY: e.clientY - window.startY,
            }
          : window
      )
    );
  };

  const handleMouseUp = (windowId) => {
    setWindows((prevWindows) =>
      prevWindows.map((window) =>
        window.isDragging && window.id === windowId
          ? { ...window, isDragging: false }
          : window
      )
    );
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
    const handleWindowMove = (e) => {
      setWindows((prevWindows) =>
        prevWindows.map((window) =>
          window.isDragging
            ? {
                ...window,
                offsetX: e.clientX - window.startX,
                offsetY: e.clientY - window.startY,
              }
            : window
        )
      );
    };

    const handleWindowUp = () => {
      setWindows((prevWindows) =>
        prevWindows.map((window) =>
          window.isDragging ? { ...window, isDragging: false } : window
        )
      );
    };

    window.addEventListener("mousemove", handleWindowMove);
    window.addEventListener("mouseup", handleWindowUp);

    return () => {
      window.removeEventListener("mousemove", handleWindowMove);
      window.removeEventListener("mouseup", handleWindowUp);
    };
  }, []);

  return (
    <>
      {windows.map((window) => (
        <div
          key={window.id}
          className={classes.ChatGptWrapper}
          style={{
            transform: `translate(${window.offsetX}px, ${window.offsetY}px)`,
            display: window.isOpen ? "block" : "none",
          }}
          onMouseDown={(e) => handleMouseDown(e, window.id)}
          onMouseMove={(e) => handleMouseMove(e, window.id)}
          onMouseUp={() => handleMouseUp(window.id)}
        >
          <div className={classes.TitleBar}>
            <div className={classes.Title}>
              {window.id === 1 ? "30.07.2023" : "31.07.2023"}
            </div>
            <div className={classes.Icons}>
              <div
                className={classes.CloseButton}
                onClick={() => handleCloseClick(window.id)}
              >
                ✕
              </div>
            </div>
          </div>
          <img
            src={window.id === 1 ? blog1 : blog2}
            className={classes.folderImage}
            alt="logo"
          />
        </div>
      ))}
    </>
  );
}

export default NieWiem;
