import React, { useState } from "react";
import classes from "./Options.module.css";

function Options(props) {
  console.log(props.options);

  return (
    <ul className={classes.Options}>
      {props.options.map((title) => {
        return <il>{title}</il>;
      })}
    </ul>
  );
}

export default Options;
