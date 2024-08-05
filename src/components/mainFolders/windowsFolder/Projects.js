import React, { useState } from "react";
import classes from "./Projects.module.css";
import image from "../../../sources/images/contact.png";
import logo from "../../../sources/images/internet.png";
import SiteOptions from "../../Atoms/SiteOptions";
import Window from "../../Atoms/Window";
import TitleBar from "../../Atoms/TitleBar";
import Options from "../../Atoms/Options";

function Lista({ close, minimalize }) {
  const [txtChange, setTxtChange] = useState(
    "Check my github: https://github.com/MiszynV2"
  );
  const options = ["File", "Edit", "Format", "View", "Help"];
  const title = "Untilted - txt";
  const handleTxtChange = (e) => {
    setTxtChange(e.target.value);
  };
  return (
    <>
      <Window width={600} height={400}>
        <TitleBar
          minimalize={minimalize}
          image={logo}
          title={"This Site lol"}
          close={close}
        />

        <Options options={options} />
        {/* TODO MAKE DIRECTING COMPUTER OPTION VIA PROPS */}
        <SiteOptions />
        <div className={classes.windowsWrapper}>
          <iframe
            src="https://windows-xp-portfolio.vercel.app/"
            className={classes.windows}
          ></iframe>
        </div>
      </Window>
      <Window width={800} height={600}>
        <TitleBar
          minimalize={minimalize}
          image={logo}
          title={"instagram copy - kilogram"}
          close={close}
        />

        <Options options={options} />

        <SiteOptions />
        <div className={classes.IcWrapper}>
          <iframe
            src="https://ic-miszyn.vercel.app/"
            className={classes.IcSite}
          ></iframe>
        </div>
      </Window>
      <Window width={600} height={600}>
        <TitleBar
          minimalize={minimalize}
          image={logo}
          title={"Country_Stats"}
          close={close}
        />

        <Options options={options} />

        <SiteOptions />
        <div className={classes.SiteWrapper}>
          <iframe
            src="https://countrystatistics-wm.vercel.app/"
            className={classes.Site}
          ></iframe>
        </div>
      </Window>
    </>
  );
}

export default Lista;
