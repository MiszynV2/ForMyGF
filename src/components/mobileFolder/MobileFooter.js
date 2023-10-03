import React, { useState, useEffect } from "react";
import classes from "./MobileFooter.module.css";

function MobileFooter() {
  return (
    <div className={classes.FooterWrapper}>
      <span>|||</span>
      <span className={classes.CloseButton}>○</span>
      <span className={classes.GoBack}>&gt;</span>
    </div>
  );
}

export default MobileFooter;
