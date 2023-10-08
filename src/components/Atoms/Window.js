import React, { useState, useRef, useEffect } from "react";
import classes from "./Window.module.css";

function Window({ children }) {
  const [mobile, setMobile] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(Math.random() * 100 + 100);
  const [startY, setStartY] = useState(Math.random() * 100 + 1);
  const [offsetX, setOffsetX] = useState(Math.random() * 500);
  const [offsetY, setOffsetY] = useState(Math.random() * -100);
  const windowRef = useRef(null);
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX - offsetX);
    setStartY(e.clientY - offsetY);
  };
  useEffect(() => {
    if (isMobile) {
      setMobile("Mobile");
      setStartX(0);
      setStartY(0);
      setOffsetX(0);
      setOffsetY(0);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newOffsetX = e.clientX - startX;
      const newOffsetY = e.clientY - startY;
      setOffsetX(newOffsetX);
      setOffsetY(newOffsetY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  const handleClick = () => {
    windowRef.current.focus();
  };

  return (
    <div>
      {isMobile && (
        <div
          className={classes.WrapperMobile}
          style={{
            transform: `translate(${offsetX}px, ${offsetY}px)`,
          }}
          ref={windowRef}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onClick={handleClick}
          tabIndex={2}
        >
          {children}
        </div>
      )}
      {!isMobile && (
        <div
          className={classes.Wrapper}
          style={{
            transform: `translate(${offsetX}px, ${offsetY}px)`,
          }}
          ref={windowRef}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onClick={handleClick}
          tabIndex={2}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Window;
