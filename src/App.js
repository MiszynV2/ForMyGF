import React, { useState, useEffect } from "react";
import "./App.css";
import FolderItem from "./components/FolderItem";
import FolderList from "./components/FolderList";
import Footer from "./components/Footer";

function App() {
  const [angelHour, setAngelHour] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const isAngelHour =
        (hours === 1 && minutes === 1) ||
        (hours === 2 && minutes === 2) ||
        (hours === 3 && minutes === 3) ||
        (hours === 4 && minutes === 4) ||
        (hours === 5 && minutes === 5) ||
        (hours === 6 && minutes === 6) ||
        (hours === 7 && minutes === 7) ||
        (hours === 8 && minutes === 8) ||
        (hours === 9 && minutes === 9) ||
        (hours === 10 && minutes === 10) ||
        (hours === 11 && minutes === 11) ||
        (hours === 12 && minutes === 12) ||
        (hours === 13 && minutes === 13) ||
        (hours === 14 && minutes === 14) ||
        (hours === 15 && minutes === 15) ||
        (hours === 16 && minutes === 16) ||
        (hours === 17 && minutes === 17) ||
        (hours === 18 && minutes === 18) ||
        (hours === 19 && minutes === 19) ||
        (hours === 20 && minutes === 20) ||
        (hours === 21 && minutes === 21) ||
        (hours === 22 && minutes === 22) ||
        (hours === 23 && minutes === 23) ||
        (hours === 0 && minutes === 0);

      setAngelHour(isAngelHour ? `${hours}:${minutes}` : null);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="app-wrapper">
      {angelHour && (
        <div className="angel-hour-message">{`${angelHour} kocham cię!  ❤❤❤❤`}</div>
      )}
      <FolderList />
      <Footer />
    </div>
  );
}

export default App;
