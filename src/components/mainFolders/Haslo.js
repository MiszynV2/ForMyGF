import React, { useState, useEffect } from "react";
import classes from "./Haslo.module.css";

function Haslo({ handleFolderSelection }) {
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  const handleCloseClick = () => {
    handleFolderSelection(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (password === "masło") {
      setIsPasswordCorrect(true);
      handleFolderSelection(13); 
    } else {
      setIsPasswordCorrect(false);
    }
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordCorrect(true); 
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX - offsetX);
    setStartY(e.clientY - offsetY);
  };

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

  const handleWindowMouseMove = (e) => {
    handleMouseMove(e);
  };

  const handleWindowMouseUp = () => {
    handleMouseUp();
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleWindowMouseMove);
      window.addEventListener("mouseup", handleWindowMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
      window.removeEventListener("mouseup", handleWindowMouseUp);
    };
  }, [isDragging]);

  const endsWithMaslo = password.toLowerCase().endsWith("maslo");
  const endsWithMaslo2 = password.toLowerCase().endsWith("masło");
  const endsWithOwka = password.toLowerCase().endsWith("ówka");
  const endsWithOwka2 = password.toLowerCase().endsWith("owka");
  const hasUpperCase = /[A-Z]/.test(password);
  return (
    <div
      className={classes.PasswordContainer}
      style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
    >
      <div className={classes.PasswordTitleBar} onMouseDown={handleMouseDown}>
        <div className={classes.PasswordTitle}>
          Wskazówka rymuje się z mrówka
        </div>
        <div className={classes.PasswordIcons}>
          <div
            className={classes.PasswordCloseButton}
            onClick={handleCloseClick}
          >
            ✕
          </div>
        </div>
      </div>
      <form onSubmit={handleSubmit} className={classes.PasswordForm}>
        <div className={classes.PasswordContent}>
          <label htmlFor="password">Wprowadź hasło:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handleChange}
            className={
              isPasswordCorrect
                ? classes.PasswordValid
                : classes.PasswordInvalid
            }
          />
          {!isPasswordCorrect && (
            <div className={classes.ErrorMessage}>
              {endsWithOwka || endsWithOwka2
                ? "Hasło się rymuje z czymś innym"
                : "Hasło jest złe."}
              {hasUpperCase ? " Hasło nie ma dużych liter." : ""}
              {endsWithMaslo || endsWithMaslo2 ? " To prawie było hasło" : ""}
            </div>
          )}
        </div>
        <button type="submit" className={classes.PasswordSubmitButton}>
          Zatwierdź
        </button>
      </form>
    </div>
  );
}

export default Haslo;
