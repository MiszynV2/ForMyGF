import React, { useState } from "react";
import classes from "./ComputerRightSection.module.css";
import image from "../../sources/images/folder.png";

function ComputerRightSection() {
  return (
    <div className={classes.RightSection}>
      <div className={classes.RightSectionList}>
        <div className={classes.RightSectionListTitle}>
          Files Stored on This Computer
        </div>
        <div className={classes.RightSectionItem}>
          <img alt="" src={image} />
          <span>Documents</span>
        </div>{" "}
        <div className={classes.RightSectionItem}>
          <img alt="" src={image} />
          <span>Documents</span>
        </div>
      </div>
      <div className={classes.RightSectionList}>
        <div className={classes.RightSectionListTitle}>Users files</div>
        <div className={classes.RightSectionItem}>
          <img alt="" src={image} />
          <span>Documents</span>
        </div>{" "}
        <div className={classes.RightSectionItem}>
          <img alt="" src={image} />
          <span>Documents</span>
        </div>
      </div>
      <div className={classes.RightSectionList}>
        <div className={classes.RightSectionListTitle}>
          Hard disks Stored on This Computer
        </div>
        <div className={classes.RightSectionItem}>
          <img alt="" src={image} />
          <span>Documents</span>
        </div>{" "}
        <div className={classes.RightSectionItem}>
          <img alt="" src={image} />
          <span>Documents</span>
        </div>
      </div>
    </div>
  );
}

export default ComputerRightSection;
