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
        <div className={classes.RightSectionItemWrapper}>
          <div className={classes.RightSectionItem}>
            <img alt="" src={image} />
            <span>Shared Documents</span>
          </div>{" "}
          <div className={classes.RightSectionItem}>
            <img alt="" src={image} />
            <span>WM's Documents</span>
          </div>
        </div>
      </div>
      <div className={classes.RightSectionList}>
        <div className={classes.RightSectionListTitle}>Hard disk Drives</div>
        <div className={classes.RightSectionItemWrapper}>
          <div className={classes.RightSectionItem}>
            <img alt="" src={image} />
            <span>WIN_XP (C:)</span>
          </div>{" "}
          <div className={classes.RightSectionItem}>
            <img alt="" src={image} />
            <span>MP3 (D:)</span>
          </div>
        </div>
      </div>
      <div className={classes.RightSectionList}>
        <div className={classes.RightSectionListTitle}>
          Devices with Removable Storage
        </div>
        <div className={classes.RightSectionItemWrapper}>
          <div className={classes.RightSectionItem}>
            <img alt="" src={image} />
            <span>Floppy disk (A:)</span>
          </div>{" "}
          <div className={classes.RightSectionItem}>
            <img alt="" src={image} />
            <span>WB2RKE_PL (Z:)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComputerRightSection;
