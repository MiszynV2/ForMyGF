import React from "react";
import classes from "./GaduChat.module.css";

import image from "../../../../sources/gadu-chat-logo.webp";

const CONTACTS = [
  {
    name: "Anonim club",
    icon: image,
  },
  {
    icon: image,
    name: "Julka",
  },
  {
    name: "Kafka",
    icon: image,
  },
  {
    name: "Marcin",
    icon: image,
  },
  {
    name: "Piasek",
    icon: image,
  },
  {
    name: "Rafał",
    icon: image,
  },
  {
    name: "Slawek",
    icon: image,
  },
  {
    name: "Sylwia",
    icon: image,
  },
  {
    name: "Wanda",
    icon: image,
  },
  {
    name: "Daniel",
    icon: image,
  },
];

function GaduChatContacts() {
  return (
    <div className={classes.ContactsWrapper}>
      <span className={classes.ContactsText}>Contacts</span>
      {CONTACTS.map((data) => {
        return (
          <div className={classes.ContactWrapper}>
            <img alt="" src={data.icon} />
            <span className={classes.ContactName}>{data.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export default GaduChatContacts;
