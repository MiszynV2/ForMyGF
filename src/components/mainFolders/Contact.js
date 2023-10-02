import React, { useState, useEffect } from "react";
import classes from "./Contact.module.css";
import dzwiek from "../../sources/dzwiek.png";
import contact from "../../sources/images/contact.png";
// import firebase from "../../firebase";

function Dzwieki({ handleFolderSelection }) {
  const [isDragging, setIsDragging] = useState(false);
  const [email, setEmail] = useState("");
  const [emailContentChange, setEmailContentChange] = useState("");
  const [startX, setStartX] = useState(0);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleCloseClick = (e) => {
    handleFolderSelection(0);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX - offsetX);
    setStartY(e.clientY - offsetY);
    e.preventDefault();
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsPasswordCorrect(true);
  };
  const handleEmailContentChange = (e) => {
    setEmailContentChange(e.target.value);
    setIsPasswordCorrect(true);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newOffsetX = e.clientX - startX;
      const newOffsetY = e.clientY - startY;
      setOffsetX(newOffsetX);
      setOffsetY(newOffsetY);
    }
  };
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    // try {
    //   const db = firebase.firestore(); // Pobranie instancji bazy danych Firestore
    //   const messagesCollection = db.collection("messages"); // Utworzenie kolekcji o nazwie "messages"

    //   // Dodanie dokumentu do kolekcji
    //   await messagesCollection.add({
    //     to: email,
    //     subject: "Temat wiadomości",
    //     text: emailContentChange,
    //   });

    //   console.log("E-mail został wysłany pomyślnie.");
    // } catch (error) {
    //   console.error("Wystąpił błąd podczas wysyłania e-maila.", error);
    // }
  };
  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const chatGptWrapper = document.getElementById("chat-gpt-wrapper");
    if (chatGptWrapper) {
      const { top, left, right, bottom } =
        chatGptWrapper.getBoundingClientRect();
      if (left < 0) {
        setOffsetX(offsetX - left);
      } else if (right > windowWidth) {
        setOffsetX(offsetX - (right - windowWidth));
      }
      if (top < 0) {
        setOffsetY(offsetY - top);
      } else if (bottom > windowHeight) {
        setOffsetY(offsetY - (bottom - windowHeight));
      }
    }
  }, [offsetX, offsetY, windowWidth, windowHeight]);

  return (
    <div
      className={classes.ChatGptWrapper}
      style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
    >
      <div
        className={classes.TitleBar}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      >
        <img src={contact} className={classes.FolderLogo} alt="folder" />
        <div className={classes.Title}>Contact me</div>
        <div className={classes.Icons}>
          <div className={classes.CloseButton} onClick={handleCloseClick}></div>
        </div>
      </div>
      <form className={classes.PasswordForm}>
        <div className={classes.Email}>
          <label htmlFor="password">Your E-mail</label>
          <input
            onChange={handleEmailChange}
            type="text"
            id="password"
            value={email}
          />
        </div>
        <div className={classes.Content}>
          <label htmlFor="password">Write something to me :)</label>
          <textarea
            onChange={handleEmailContentChange}
            type="text"
            id="password"
            value={emailContentChange}
          />
        </div>
        <button
          type="submit"
          onSubmit={handleEmailSubmit}
          className={classes.PasswordSubmitButton}
        >
          Zatwierdź
        </button>
      </form>
    </div>
  );
}

export default Dzwieki;