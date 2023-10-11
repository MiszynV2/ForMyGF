import React, { useState } from "react";
import classes from "./Projects.module.css";
import image from "../../sources/images/text.png";
import Window from "../Atoms/Window";
import TitleBar from "../Atoms/TitleBar";
import Options from "../Atoms/Options";

function Lista({ close }) {
  const [txtChange, setTxtChange] = useState("");
  const options = ["File", "Edit", "Format", "View", "Help"];
  const title = "Untilted - txt";
  const handleTxtChange = (e) => {
    setTxtChange(e.target.value);
  };
  return (
    <Window>
      <TitleBar image={image} title={title} close={close} />
      <div className={classes.ProjectContent}>
        <Options options={options} />

        <textarea value={txtChange} onChange={handleTxtChange} />
      </div>
    </Window>
  );
}

export default Lista;
