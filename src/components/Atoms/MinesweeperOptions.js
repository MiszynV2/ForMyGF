import React, { useState } from "react";
import classes from "./Options.module.css";

function MinesweeperOptions(props) {
  function handleTitle(title) {
    return () => {
      props.SetTitle(title);
    };
  }

  return (
    <ul className={classes.Options}>
      {props.options.map((title, index) => {
        return (
          <li onClick={handleTitle(title)} key={index}>
            {title}
          </li>
        );
      })}
    </ul>
  );
}

export default MinesweeperOptions;
