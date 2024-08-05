import React, { useEffect, useState } from "react";
import classes from "./GaduChat.module.css";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore/lite";
import firebaseGadu from "./../../../../firebase";

function GaduChatMessage({ state }) {
  const [messages, setMessages] = useState([]);
  let status = state;

  useEffect(() => {
    const fetchMessages = async () => {
      const messCol = collection(firebaseGadu, "GaduChat");

      const textQuery = query(messCol, where("text", "!=", null));
      const textQuerySnapshot = await getDocs(textQuery);
      const textMessages = textQuerySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          ...data,
          date: data.date ? data.date.toDate().toLocaleString() : null,
        };
      });

      const allQuery = query(messCol, orderBy("date"));
      const allQuerySnapshot = await getDocs(allQuery);
      const allMessages = allQuerySnapshot.docs.map((doc) => {
        const data = doc.data();
        return {
          ...data,
          date: data.date ? data.date.toDate().toLocaleString() : null,
        };
      });


      const newMessages = allMessages.filter(
        (message) => message.text !== null
      );

     
      setMessages(newMessages);
    };

    fetchMessages();
  }, [status]);

  return (
    <div className={classes.MessagesWrapper}>
      {messages.map((data, index) => {
        const isYellow = index % 2 === 1;
        const messageWrapperClass = isYellow
          ? `${classes.MessageWrapper} ${classes.YellowBackground}`
          : classes.MessageWrapper;

        return (
          <div className={messageWrapperClass} key={index}>
            <div>
              <span>{data.name}</span>
              <span className={classes.MassageDate}>{data.date}</span>
            </div>
            <span>{data.text}</span>
          </div>
        );
      })}
    </div>
  );
}

export default GaduChatMessage;
