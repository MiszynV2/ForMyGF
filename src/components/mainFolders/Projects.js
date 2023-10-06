import React from "react";
import classes from "./Contact.module.css";
import image from "../../sources/images/experience.png";
import Window from "../Atoms/Window";
import TitleBar from "../Atoms/TitleBar";

function Lista({ close }) {
  const title = "Lista";

  return (
    <Window>
      <TitleBar image={image} title={title} close={close} />
    </Window>
  );
}

export default Lista;
