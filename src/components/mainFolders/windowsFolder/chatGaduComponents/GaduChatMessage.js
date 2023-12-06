import React from "react";
import classes from "./GaduChat.module.css";

import image from "../../../../sources/gadu-chat-logo.webp";

const CHAT1 = [
  {
    name: "Koda",
    date: "19:29",
    message: "Miau Miau Miau Miau ",
  },
  {
    name: "Me",
    date: "19:29",
    message: "Hał Hał Hał Hał Hał",
  },
  {
    name: "Koda",
    date: "19:29",
    message: "Miau Miau Miau Miau ",
  },
  {
    name: "Me",
    date: "19:29",
    message: "Hał Hał Hał Hał Hał",
  },
  {
    name: "Koda",
    date: "19:29",
    message: "Miau Miau Miau Miau ",
  },
];

function GaduChatMessage() {
  return (
    <div className={classes.MessagesWrapper}>
      {CHAT1.map((data, index) => {
        const isYellow = index % 2 === 1;
        const messageWrapperClass = isYellow
          ? `${classes.MessageWrapper} ${classes.YellowBackground}`
          : classes.MessageWrapper;

        return (
          <div className={messageWrapperClass}>
            <div>
              <span>{data.name}</span>
              <span className={classes.MassageDate}>{data.date}</span>
            </div>
            <span>{data.message}</span>
          </div>
        );
      })}
    </div>
  );
}

export default GaduChatMessage;
