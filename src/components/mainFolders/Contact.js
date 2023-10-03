import React, { useState, useEffect } from "react";
import classes from "./Contact.module.css";
import contact from "../../sources/images/contact.png";
import firebase from "../../firebase";
import { collection, addDoc } from "firebase/firestore/lite";

function Contact({ handleFolderSelection }) {
  const [isDragging, setIsDragging] = useState(false);
  const [email, setEmail] = useState("");
  const [emailContentChange, setEmailContentChange] = useState("");
  const [startX, setStartX] = useState(0);
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(true);
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailSend, setIsEmailSend] = useState(false);
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
    if (email.length > 1) {
      setIsEmailValid(true);
    }
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
    const regMail =
      /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
    const date = new Date();
    console.log(!email.match(regMail));
    console.log({ email });
    console.log(!email.match(regMail));
    if (!email.match(regMail)) {
      setIsEmailValid(false);
      console.log("nie zgadza sie");
      return;
    } else {
      try {
        setIsEmailValid(true);
        const messCol = collection(firebase, "messages");
        await addDoc(messCol, {
          Email: email,
          text: emailContentChange,
          date: date,
        });
        setIsEmailSend(true);
        console.log("E-mail został wysłany pomyślnie.");
      } catch (error) {
        console.error("Wystąpił błąd podczas wysyłania e-maila.", error);
      }
    }
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
    const Wrapper = document.getElementById("chat-gpt-wrapper");
    if (Wrapper) {
      const { top, left, right, bottom } = Wrapper.getBoundingClientRect();
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
      className={classes.Wrapper}
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
      <form className={classes.PasswordForm} onSubmit={handleEmailSubmit}>
        <div className={classes.Email}>
          <label htmlFor="password">Your E-mail</label>
          <input
            onChange={handleEmailChange}
            type="text"
            id="password"
            value={email}
          />
          {!isEmailValid ? (
            <span className={classes.EmailValidSpan}>Incorrect email</span>
          ) : (
            ""
          )}
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

        <button type="submit" className={classes.PasswordSubmitButton}>
          Zatwierdź
        </button>
        {isEmailSend && (
          <span className={classes.SuccessfulSubmitText}>
            Massage has been send!!!
          </span>
        )}
      </form>
    </div>
  );
}

export default Contact;
