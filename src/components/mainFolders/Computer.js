import React, { useState } from "react";
import classes from "./Computer.module.css";
import Window from "../Atoms/Window";
import image from "../../sources/images/computer.png";
import TitleBar from "../Atoms/TitleBar";
import Options from "../Atoms/Options";

function Computer({ close }) {
  const title = "My Computer";
  const options = ["File", "Edit", "View", "Favorites", "Tools", "Help"];
  return (
    <Window>
      <TitleBar image={image} title={title} close={close} />
      <div className={classes.Wrapper}>
        <Options options={options} />

        <textarea className={classes.Text} spellCheck="false">
          As a Junior Front-End Engineer, I am passionate about creating
          engaging user experiences and building responsive web applications.
          With a strong foundation in HTML, CSS, and JavaScript, I am
          experienced in creating visually appealing and user-friendly websites.
          I am also familiar with various front-end frameworks such as React and
          enjoy collaborating with other developers, designers, and stakeholders
          to create high-quality end products. Outside of work, I stay
          up-to-date with the latest industry news and trends and enjoy making
          new recipes in my kitchen.
        </textarea>
      </div>
    </Window>
  );
}

export default Computer;
