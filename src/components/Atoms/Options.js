import React, { useState } from "react";
import classes from "./Options.module.css";

function Options(props) {
  return (
    <ul className={classes.Options}>
      {props.options.map((title, index) => {
        return <li key={index}>{title}</li>;
      })}
    </ul>
  );
}

export default Options;
