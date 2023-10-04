import React from "react";
import classes from "./AboutMe.module.css";
import text from "../../sources/images/text.png";
import CloseButton from "../../sources/close.svg";
import Window from "../Atoms/Window";

function AboutMe({ handleFolderSelection }) {
  return (
    <Window>
      <div className={classes.TitleBar}>
        <img src={text} className={classes.FolderLogo} alt="folder" />
        <div className={classes.Title}>About me</div>

        <button
          onClick={() => {
            handleFolderSelection(0);
          }}
          src={CloseButton}
          className={classes.CloseButton}
        />
      </div>
      <ul className={classes.Options}>
        <il className={classes.OptionsFile}>File</il>
        <il className={classes.OptionsEdit}>Edit</il>
        <il className={classes.OptionsFormat}>Format</il>
        <il className={classes.OptionsView}>View</il>
        <il className={classes.OptionsHelp}>Help</il>
      </ul>
      <div className={classes.TextWrapper}>
        <span className={classes.Text}>
          As a Junior Front-End Engineer, I am passionate about creating
          engaging user experiences and building responsive web applications.
          With a strong foundation in HTML, CSS, and JavaScript, I am
          experienced in creating visually appealing and user-friendly websites.
          I am also familiar with various front-end frameworks such as React and
          enjoy collaborating with other developers, designers, and stakeholders
          to create high-quality end products. Outside of work, I stay
          up-to-date with the latest industry news and trends and enjoy making
          new recipes in my kitchen.
        </span>
      </div>
    </Window>
  );
}

export default AboutMe;
