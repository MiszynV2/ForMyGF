import React, { useState } from "react";
import classes from "./Contact.module.css";
import image from "../../sources/images/contact.png";
import firebase from "../../firebase";
import { collection, addDoc } from "firebase/firestore/lite";
import Window from "../Atoms/Window";
import TitleBar from "../Atoms/TitleBar";

function Contact({ close }) {
  const [email, setEmail] = useState("");
  const [emailContentChange, setEmailContentChange] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailSend, setIsEmailSend] = useState(false);
  const title = "Contact me";
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (email.length > 1) {
      setIsEmailValid(true);
    }
  };
  const handleEmailContentChange = (e) => {
    setEmailContentChange(e.target.value);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    const regMail =
      /^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*$/;
    const date = new Date();

    if (!email.match(regMail)) {
      setIsEmailValid(false);

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
      } catch (error) {
        console.error("Wystąpił błąd podczas wysyłania e-maila.", error);
      }
    }
  };

  return (
    <Window>
      <TitleBar image={image} title={title} close={close} />
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
    </Window>
  );
}

export default Contact;
