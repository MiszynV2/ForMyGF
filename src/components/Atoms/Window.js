import React, { useState, useRef, useEffect } from "react";
import classes from "./Window.module.css";

function Window({ children, width = 400, height = 100 }) {
  const [mobile, setMobile] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const windowRef = useRef(null);
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX - offsetX);
    setStartY(e.clientY - offsetY);
  };
  useEffect(() => {
    if (!isMobile) {
      setStartX(Math.random() * 100 + 100);
      setStartY(Math.random() * 100 + 1);
      setOffsetX(Math.random() * 500);
      setOffsetY(Math.random() * -100);
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
          tabIndex={0}
        >
          {children}
        </div>
      )}
      {!isMobile && (
        <div
          className={classes.Wrapper}
          style={{
            transform: `translate(${offsetX}px, ${offsetY}px)`,
            width: `${width}px`,
          }}
          ref={windowRef}
          onTouchStart={handleMouseDown}
          onTouchMove={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onClick={handleClick}
          tabIndex={0}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default Window;
