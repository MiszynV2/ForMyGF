import React, { useState } from "react";
import classes from "./Options.module.css";

function Options(props) {
  return (
    <ul className={classes.Options}>
      {props.options.map((title) => {
        return <il>{title}</il>;
      })}
    </ul>
  );
}

export default Options;
