import React, { useState, useEffect } from "react";
import classes from "./Footer.module.css";

function Footer({ bears }) {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  return (
    <div className={classes.FooterWrapper}>
      <div className={classes.CurrentTime}>{currentTime}</div>
    </div>
  );
}

export default Footer;
