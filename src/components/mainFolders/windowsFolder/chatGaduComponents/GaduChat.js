import React from "react";
import classes from "./GaduChat.module.css";

import image from "../../../../sources/gadu-chat-logo.webp";
import ad from "../../../../sources/fireAd.gif";
import Window from "./../../../Atoms/Window";
import TitleBar from "./../../../Atoms/TitleBar";
import GaduChatMessage from "./GaduChatMessage";
import GaduChatTextbox from "./GaduChatTextbox";
import Options from "../../../Atoms/Options";
import GaduChatContacts from "./GaduChatContacts";
//import Options from "../../../../Atoms/Options";

function GaduChat({ close }) {
  const options = ["GaduGadu", "PowerGG"];
  const title = "Gadu Chat";
  return (
    <Window width={500}>
      <TitleBar image={image} title={title} close={close} />
      <Options options={options} />
      <div className={classes.Wrapper}>
        <div className={classes.LeftSectionWrapper}>
          <div className={classes.Ad}>
            <img className={classes.AdGif} alt="adGif" src={ad} />
          </div>
          <GaduChatMessage />
          <GaduChatTextbox />
        </div>
        <div className={classes.RightSectionWrapper}>
          <GaduChatContacts />
        </div>
      </div>
    </Window>
  );
}

export default GaduChat;
