import React, { useState } from "react";
import classes from "./Haslo.module.css";
import Window from "../Atoms/Window";

function Haslo({ handleFolderSelection }) {
  const [password, setPassword] = useState("");
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === "masło") {
      setIsPasswordCorrect(true);
      handleFolderSelection(14);
    } else {
      setIsPasswordCorrect(false);
    }
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordCorrect(true);
  };

  const endsWithMaslo = password.toLowerCase().endsWith("maslo");
  const endsWithMaslo2 = password.toLowerCase().endsWith("masło");
  const endsWithOwka = password.toLowerCase().endsWith("ówka");
  const endsWithOwka2 = password.toLowerCase().endsWith("owka");
  const hasUpperCase = /[A-Z]/.test(password);
  return (
    <Window>
      <div className={classes.PasswordTitleBar}>
        <div className={classes.PasswordTitle}>Placeholder</div>
        <div className={classes.PasswordIcons}>
          <div
            className={classes.PasswordCloseButton}
            onClick={() => {
              handleFolderSelection(0);
            }}
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
    </Window>
  );
}

export default Haslo;
