import React, { useState, useEffect } from "react";
import "./App.css";
import FolderItem from "./components/FolderItem";
import FolderList from "./components/FolderList";
import Footer from "./components/Footer";
import movingBear from "./sources/moving-bear.gif";

function App() {
  const [angelHour, setAngelHour] = useState(null);
  const [bearPosition, setBearPosition] = useState({ x: 0, y: 0 });
  const [bearDirection, setBearDirection] = useState({ x: 1, y: 1 });
  const [isTouchingEdge, setIsTouchingEdge] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const isAngelHour =
        (hours === "01" && minutes === "01") ||
        (hours === "02" && minutes === "02") ||
        (hours === "03" && minutes === "03") ||
        (hours === "04" && minutes === "04") ||
        (hours === "05" && minutes === "05") ||
        (hours === "06" && minutes === "06") ||
        (hours === "07" && minutes === "07") ||
        (hours === "08" && minutes === "08") ||
        (hours === "09" && minutes === "09") ||
        (hours === "10" && minutes === "10") ||
        (hours === "11" && minutes === "11") ||
        (hours === "12" && minutes === "12") ||
        (hours === "13" && minutes === "13") ||
        (hours === "14" && minutes === "14") ||
        (hours === "15" && minutes === "15") ||
        (hours === "16" && minutes === "16") ||
        (hours === "17" && minutes === "17") ||
        (hours === "18" && minutes === "18") ||
        (hours === "19" && minutes === "19") ||
        (hours === "20" && minutes === "20") ||
        (hours === "21" && minutes === "21") ||
        (hours === "22" && minutes === "22") ||
        (hours === "23" && minutes === "23") ||
        (hours === "00" && minutes === "00");

      setAngelHour(isAngelHour ? `${hours}:${minutes}` : null);
    }, 1000);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const moveBear = () => {
      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;

      const currentX = bearPosition.x;
      const currentY = bearPosition.y;
      let newX = currentX + bearDirection.x * 5;
      let newY = currentY + bearDirection.y * 5;

      if (newX + 100 > windowWidth || newX < 0) {
        setBearDirection((prevDirection) => ({
          ...prevDirection,
          x: -prevDirection.x,
        }));
      }
      if (newY + 100 > windowHeight || newY < 0) {
        setBearDirection((prevDirection) => ({
          ...prevDirection,
          y: -prevDirection.y,
        }));
      }

      setBearPosition({ x: newX, y: newY });
    };

    const moveInterval = setInterval(moveBear, 50);

    return () => {
      clearInterval(moveInterval);
    };
  }, [bearDirection, bearPosition.x, bearPosition.y]);

  return (
    <div className="app-wrapper">
      {angelHour && (
        <div className="angel-hour-message">{`${angelHour} kocham cię!  ❤❤❤❤`}</div>
      )}

      <FolderList />
      {!isMobile && <Footer />}
    </div>
  );
}

export default App;
