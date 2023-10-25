import React from "react";
import classes from "./Paint.module.css";
import image from "./../sources/check.svg";
import logo from "./../sources/images/paint.png";
import Window from "./Atoms/Window";
import TitleBar from "./Atoms/TitleBar";
import Options from "./Atoms/Options";

function Paint({ close }) {
  const title = "Untilted - Paint";
  return (
    <Window width={600} height={600}>
      <TitleBar image={logo} title={title} close={close} />
      <div className={classes.PaintWrapper}>
        <iframe src="https://jspaint.app" className={classes.Paint}></iframe>
      </div>
    </Window>
  );
}

export default Paint;
