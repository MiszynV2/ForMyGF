import React from "react";
import classes from "./CountryStats.module.css";
import logo from "../../../sources/images/internet.png";
import Window from "../../Atoms/Window";
import TitleBar from "../../Atoms/TitleBar";
import Options from "../../Atoms/Options";
import SiteOptions from "../../Atoms/SiteOptions";

function CountryStats({ close, minimalize }) {
  const title = "CountryStats.html";
  const options = ["File", "Edit", "View", "Favorites", "Tools", "Help"];
  return (
    <Window width={1000} height={600}>
      <TitleBar
        minimalize={minimalize}
        image={logo}
        title={title}
        close={close}
      />

      <Options options={options} />
      {/* TODO MAKE DIRECTING COMPUTER OPTION VIA PROPS */}
      <SiteOptions />
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
