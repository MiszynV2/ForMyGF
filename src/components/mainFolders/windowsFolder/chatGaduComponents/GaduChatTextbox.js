import React from "react";
import classes from "./GaduChat.module.css";

import image from "../../../../sources/gadu-chat-logo.webp";

function GaduChatTextbox() {
  return (
    <div className={classes.TextBoxWrapper}>
      <div className={classes.TextareaWrapper}>
        <textarea className={classes.Textbox} spellCheck="false"></textarea>
      </div>
      <div className={classes.Buttons}>
        <button>Send</button>
        <button>Clear</button>
        <button>Close</button>
      </div>
    </div>
  );
}

export default GaduChatTextbox;
