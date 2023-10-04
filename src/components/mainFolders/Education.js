import React from "react";
import classes from "./Education.module.css";
import image from "../../sources/images/experience.png";
import CloseButton from "../../sources/close.svg";
import paperclip from "../../sources/paperclip.png";
import cloud from "../../sources/dymek.png";
import Window from "../Atoms/Window";
import TitleBar from "../Atoms/TitleBar";
import Options from "../Atoms/Options";

function Education({ handleFolderSelection }) {
  const title = "Education";
  const options = ["File", "Edit", "Format", "View", "Help"];

  return (
    <Window>
      <TitleBar
        image={image}
        title={title}
        handleFolderSelection={handleFolderSelection}
      />
      <Options options={options} />
      <div className={classes.ContentWrapper}>
        <ul className={classes.UlMain}>
          <li>Szczecińskie collegium informatyczne</li>

          <ul className={classes.UlBeta}>
            <li>Programming</li>
            <li>Linux</li>
            <li>Project management</li>
          </ul>
        </ul>
        <div className={classes.TextPaperClip}>
          <img
            className={classes.CloudPaperClip}
            alt="text cloud"
            src={cloud}
          ></img>
          <span className={classes.Text}>
            Throughout my education, I honed my programming skills through
            challenging task assignments and extracurricular activities such as
            programming workshops and hackathons. These experiences have given
            me a strong foundation in programming and problem-solving,
            empowering me to approach complex technical challenges with
            confidence and innovation.
          </span>
          <img
            className={classes.ImagePaperClip}
            alt="paper clip"
            src={paperclip}
          ></img>
        </div>
      </div>
    </Window>
  );
}

export default Education;
