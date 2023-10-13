import classes from "./ComputerOptions.module.css";
import back from "../../sources/computerBackButton.png";
import forward from "../../sources/computerForwardButton.png";
import loop from "../../sources/computerLoop.png";
import share from "../../sources/computerShareFolder.png";
import folder from "../../sources/computerFolder.png";
import sort from "../../sources/computerSortingOptions.png";

function ComputerOptions() {
  return (
    <div className={classes.Wrapper}>
      <img alt="" src={back} />
      <span>Back</span>
      <img alt="" src={forward} />
      <img alt="" src={share} />
      <div className={classes.Line}></div>
      <img alt="" src={loop} />
      <span>Search</span>
      <img alt="" src={folder} />
      <span>Folders</span>
      <div className={classes.Line}></div>

      <img alt="" src={sort} />
    </div>
  );
}

export default ComputerOptions;
