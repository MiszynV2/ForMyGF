import React from "react";
import classes from "./GaduChat.module.css";

import image from "../../../../sources/gadu-chat-logo.webp";

const CONTACTS = [
  {
    name: "Artur",
  },
  {
    name: "Julka",
  },
  {
    name: "Kafka",
  },
  {
    name: "Marcin",
  },
  {
    name: "Piasek",
  },
  {
    name: "Rafał",
  },
  {
    name: "Slawek",
  },
  {
    name: "Sylwia",
  },
  {
    name: "Wanda",
  },
  {
    name: "Daniel",
  },
];

function GaduChatContacts() {
  return (
    <div className={classes.ContactsWrapper}>
      {CONTACTS.map((data) => {
        <div className={classes.ContactWrapper}>
          <img alt="" src={image} />
          <span className={classes.ContactName}>{data.name}</span>
        </div>;
      })}
    </div>
  );
}

export default GaduChatContacts;
