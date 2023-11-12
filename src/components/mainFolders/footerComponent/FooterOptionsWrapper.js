import React, { useState, useEffect } from "react";
import classes from "./FooterOptionsWrapper.module.css";
import okAntyvirus from "../../../sources/images/okAntyvirus.png";
import soundMuted from "../../../sources/images/soundMuted.png";
import bluetooth from "../../../sources/images/bluetooth.png";

function FooterOptionsWrapper() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div className={classes.FooterOptionsWrapper}>
      <div className={classes.FooterOptions}>
        <img
          className={classes.FooterStartSound}
          src={okAntyvirus}
          alt="antyvirus logo"
        />
        <img
          className={classes.FooterStartAntivirus}
          src={soundMuted}
          alt="muted sound icon"
        />
        <img
          className={classes.FooterStartInternet}
          src={bluetooth}
          alt="bluetooth logo"
        />
      </div>
      <span className={classes.CurrentTime}>{getCurrentTime()}</span>
    </div>
  );
}

export default FooterOptionsWrapper;
