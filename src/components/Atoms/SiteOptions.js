import classes from "./ComputerOptions.module.css";
import back from "../../sources/computerBackButton.png";
import forward from "../../sources/computerForwardButton.png";
import deleteSite from "../../sources/images/deleteSite.png";
import refreshSite from "../../sources/images/refreshSite.png";
import home from "../../sources/images/home.png";
import loop from "../../sources/images/loop.png";
import skills from "../../sources/images/skills.png";
import history from "../../sources/images/history.png";
import print from "../../sources/images/print.png";
import contact from "../../sources/images/ContactIconSite.png";

function SiteOptions() {
  return (
    <div className={classes.Wrapper}>
      <img alt="" src={back} />
      <span>Back</span>
      <img alt="" src={forward} />
      <img alt="" src={deleteSite} />
      <img alt="" src={refreshSite} />
      <img alt="" src={home} />
      <div className={classes.Line}></div>
      <img alt="" src={loop} />
      <span>Search</span>
      <img alt="" src={skills} />
      <span>Favorites</span>
      <img alt="" src={history} />
      <div className={classes.Line}></div>
      <img alt="" src={print} />
      <img alt="" src={contact} />
    </div>
  );
}

export default SiteOptions;
