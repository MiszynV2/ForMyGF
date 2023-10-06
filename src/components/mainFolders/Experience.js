import React from "react";
import classes from "./Experience.module.css";

import image from "../../sources/images/education.png";
import CloseButton from "../../sources/close.svg";
import Window from "../Atoms/Window";
import TitleBar from "../Atoms/TitleBar";
import Options from "../Atoms/Options";

function Education({ close }) {
  const options = ["File", "Edit", "Format", "View", "Help"];
  const title = "Education";
  return (
    <Window>
      <TitleBar image={image} title={title} close={close} />
      <Options options={options} />
      <div className={classes.Wrapper}>
        <div className={classes.ContentWrapper}>
          <ul className={classes.UlMain}>
            <li>Salling Group</li>

            <ul className={classes.UlBeta}>
              <li>ServiceNow</li>
              <li>JavaScript</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </ul>
          <span className={classes.Text}>
            As a junior developer I maintained and optimized the ServiceNow
            platform, gaining experience in platform administration, scripting,
            and troubleshooting. I actively sought out opportunities to improve
            the platform and implemented new projects that streamlined processes
            and increased efficiency.
          </span>
        </div>
        <div className={classes.ContentWrapper}>
          <ul className={classes.UlMain}>
            <li>AdCode</li>

            <ul className={classes.UlBeta}>
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML5 / CSS3</li>
            </ul>
          </ul>
          <span className={classes.Text}>
            As a web developer, my responsibilities included implementing design
            mockups into fully-functional websites for clients. I worked closely
            with designers and project managers to ensure that the websites met
            the client's specifications and provided a seamless user experience
          </span>
        </div>
      </div>
    </Window>
  );
}

export default Education;
