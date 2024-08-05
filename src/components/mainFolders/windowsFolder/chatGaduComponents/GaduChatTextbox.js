import React, { useState } from "react";
import classes from "./GaduChat.module.css";
import firebaseGadu from "./../../../../firebase";
import { collection, addDoc } from "firebase/firestore/lite";

import image from "../../../../sources/gadu-chat-logo.webp";

const anonNumber = Math.floor(Math.random() * 1000);
const userName = `Anonim` + anonNumber;
function GaduChatTextbox({ onMessageSent }) {
  const [isSend, setIsSend] = useState(false);
  const [textContentChange, setTextContentChange] = useState("");
  const [isTextShort, setIsTextShort] = useState(true);

  const handleTextContentChange = (e) => {
    setTextContentChange(e.target.value);
    if (textContentChange > 50) {
      setIsTextShort(false);
    }
  };

  const handleTextSubmit = async (e) => {
    e.preventDefault();
    const date = new Date();

    if (!isTextShort || textContentChange.length === 0) {
      console.log("text is too long or too short!!!!!!!!!!");
      return;
    } else {
      try {
        const messCol = collection(firebaseGadu, "GaduChat");
        await addDoc(messCol, {
          name: userName,
          text: textContentChange,
          date: date,
        });
        setIsSend(true);
        setTextContentChange("");
        onMessageSent();
      } catch (error) {
        setIsSend(false);
        console.error("Something is wrong: ", error);
      }
    }
  };

  return (
    <div className={classes.TextBoxWrapper}>
      <div className={classes.TextareaWrapper}>
        <span className={classes.UserNameTextInfo}>
          Your username is {userName}
        </span>

        <textarea
          className={classes.Textbox}
          onChange={handleTextContentChange}
          spellCheck="false"
          value={textContentChange}
        ></textarea>
      </div>
      <div className={classes.Buttons}>
        <button onClick={handleTextSubmit}>Send</button>
        <button
          onClick={() => {
            setTextContentChange("");
          }}
        >
          Clear
        </button>
        <button>Close</button>
      </div>
      {isSend ? (
        <span></span>
      ) : (
        <span>Feel free to write something nice :)</span>
      )}
    </div>
  );
}

export default GaduChatTextbox;
