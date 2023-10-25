import React from "react";
import classes from "./CountryStats.module.css";
import image from "./../sources/check.svg";
import logo from "./../sources/images/internet.png";
import Window from "./Atoms/Window";
import TitleBar from "./Atoms/TitleBar";
import Options from "./Atoms/Options";

function CountryStats({ close }) {
  const title = "CountryStats.html";
  const options = ["File", "Edit", "View", "Favorites", "Tools", "Help"];
  return (
    <Window width={1000} height={600}>
      <TitleBar image={logo} title={title} close={close} />
      <Options options={options} />
      <div className={classes.SiteWrapper}>
        <iframe
          src="https://countrystatistics-wm.vercel.app/"
          className={classes.Site}
        ></iframe>
      </div>
    </Window>
  );
}

export default CountryStats;
