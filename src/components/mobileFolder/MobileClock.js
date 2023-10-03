import React, { useState, useEffect } from "react";
import classes from "./MobileClock.module.css";

function MobileClock() {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const currentDate = getCurrentDate();
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  function getCurrentDate() {
    const now = new Date();
    const day = new String(now.getDay());
    const month = new String(now.getMonth());
    const year = new String(now.getFullYear());
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    return `${days[day - 1]} ${months[month - 1]} ${year}`;
  }
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  return (
    <div className={classes.Wrapper}>
      <span className={classes.CurrentTime}>{currentTime}</span>
      <span className={classes.CurrentDate}>{currentDate}</span>
    </div>
  );
}

export default MobileClock;
