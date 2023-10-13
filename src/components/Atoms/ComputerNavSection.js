import React, { useState } from "react";
import classes from "./ComputerNavSection.module.css";
import image from "../../sources/images/computer.png";

function ComputerNavSection() {
  const navSec = [
    { title: "View system information", logo: image },
    { title: "View system information", logo: image },
    { title: "View system information", logo: image },
  ];
  return (
    <div className={classes.NavSection}>
      <div className={classes.NavSectionList}>
        <div className={classes.NavSectionHeader}>
          <span>System Tasks</span>
        </div>

        {navSec.map((item) => {
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

        {navSec.map((item) => {
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

        {navSec.map((item) => {
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
