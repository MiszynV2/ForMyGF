import React, { useState, useEffect } from "react";
import classes from "./FolderList.module.css";
import FolderItem from "./FolderItem";

function FolderList({
  data,
  activeWindowsId,
  setActiveWindowsId,
  setWindowsData,
  virus,
}) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile) {
      setActiveWindowsId([]);
    }
  }, [isMobile, setActiveWindowsId]);

  function handleOpenWindows(windowId) {
    setActiveWindowsId((prevState) => [...new Set([...prevState, windowId])]);
  }

  function handleCloseWindows(windowId) {
    setActiveWindowsId((prevState) =>
      prevState.filter((id) => id !== windowId)
    );
  }

  function handleMinimalizingWindows(windowId) {
    setWindowsData((prevState) =>
      prevState.map((item) =>
        item.id === windowId ? { ...item, IsMinimalize: true } : item
      )
    );
    setActiveWindowsId((prevState) =>
      prevState.filter((id) => id !== windowId)
    );
  }

  return (
    <div className={classes.FolderListWrapper}>
      {data.map((folderData, index) => (
        <FolderItem
          icon={folderData.icon}
          key={index}
          name={folderData.name}
          onClick={() => handleOpenWindows(folderData.id)}
        />
      ))}
      {activeWindowsId.map((id) => {
        const windowElement = data.find((element) => element.id === id);
        if (!windowElement) return null;
        const Component = windowElement.Component;
        return (
          <Component
            key={id}
            close={() => handleCloseWindows(windowElement.id)}
            minimalize={() => handleMinimalizingWindows(windowElement.id)}
            virus={virus}
          />
        );
      })}
    </div>
  );
}

export default FolderList;
