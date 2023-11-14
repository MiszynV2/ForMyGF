import React, { useState } from "react";
import classes from "./ComputerNavSection.module.css";
import image from "../../sources/images/computer.png";

function ComputerNavSection() {
  const navSecSystemTasks = [
    { title: "View system information", logo: image },
    { title: "Add or remove programs", logo: image },
    { title: "Change a setting", logo: image },
  ];
  const navSecOtherPlaces = [
    { title: "My Network Places", logo: image },
    { title: "My Documents", logo: image },
    { title: "Shared Documents", logo: image },
    { title: "Control Panel", logo: image },
  ];
  const navSecDetails = [
    { title: "View system information", logo: image },
    { title: "Add or remove programs", logo: image },
    { title: "Change a setting", logo: image },
  ];
  return (
    <div className={classes.NavSection}>
      <div className={classes.NavSectionList}>
        <div className={classes.NavSectionHeader}>
          <span>System Tasks</span>
        </div>

        {navSecSystemTasks.map((item) => {
          return (
            <div className={classes.NavSectionItem}>
              <img alt="" src={image} />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
      <div className={classes.NavSectionList}>
        <div className={classes.NavSectionHeader}>
          <span>System Tasks</span>
        </div>

        {navSecOtherPlaces.map((item) => {
          return (
            <div className={classes.NavSectionItem}>
              <img alt="" src={image} />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
      <div className={classes.NavSectionList}>
        <div className={classes.NavSectionHeader}>
          <span>System Tasks</span>
        </div>

        {navSecDetails.map((item) => {
          return (
            <div className={classes.NavSectionItem}>
              <img alt="" src={image} />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ComputerNavSection;
