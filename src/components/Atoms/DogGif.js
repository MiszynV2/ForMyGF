import React, { useState } from "react";
import classes from "./DogGif.module.css";
import cloud from "../../sources/dymek.png";
import dogo from "../../sources/dogo.gif";

function DogGif() {
  const textList = [
    '"Contact me" and "Duck.exe" is now working!" ( click me for more (: )',
    "Remember Windows XP Bliss wallpaper?",
    "Windows XP was released on October 25, 2001.",
    "It was initially codenamed 'Whistler'.",
    "Windows XP stands for 'eXPerience'.",
    "Its default desktop background is the famous 'Bliss' photo of a hill with a blue sky.",
    "Windows XP had two versions: Windows XP Home Edition and Windows XP Professional.",
    "It introduced Windows Media Player 8.",
    "Windows XP came with Internet Explorer 6 pre-installed.",
    "The system requirements for Windows XP were modest at the time, with just 64 MB of RAM recommended.",
    "It was the first version of Windows to combine the Windows 9x and NT kernels.",
    "The 'Luna' theme, with its blue and green color scheme, was the default desktop theme.",
    "Windows XP was known for its stability compared to previous versions of Windows.",
    "The Start menu and taskbar layout introduced in Windows XP remained largely unchanged for many years.",
    "It included a simplified and more user-friendly interface.",
    "Windows XP featured built-in CD burning support.",
    "The 'My Documents' folder was introduced in Windows XP, making it easier to organize personal files.",
    "The system introduced the Windows Product Activation (WPA) anti-piracy measure.",
    "Windows XP was officially supported by Microsoft for over 12 years, longer than any other Windows version.",
    "Service Pack 2 (SP2) was a significant update, improving security and adding features like the Windows Firewall.",
    "It was the last version of Windows to include the Windows Movie Maker as a part of the operating system.",
    "Windows XP included Windows Messenger, a precursor to Windows Live Messenger (MSN Messenger).",
    "The operating system supported a wide range of software and hardware due to its popularity.",
    "Windows XP was praised for its gaming performance and compatibility with older games.",
    "It had a variety of colorful and distinctive desktop backgrounds to choose from.",
    "Windows XP was known for the 'Green Hill Zone' startup sound and jingle.",
    "The operating system reached its end of extended support on April 8, 2014.",
    "Despite being outdated, some ATMs and industrial systems still use Windows XP due to its reliability.",
    "It was a key milestone in the history of personal computing, bridging the gap between older and newer Windows versions.",
    "Windows XP had a large user base and a dedicated community of users long after its official retirement.",
    "Many consider Windows XP one of the most iconic and beloved versions of Windows ever released.",
    "It marked the end of the 9x/ME family and laid the foundation for future Windows operating systems.",
  ];

  const [textIndex, setTextIndex] = useState(0);

  const handleImageClick = () => {
    setTextIndex((prevIndex) => (prevIndex + 1) % textList.length);
  };

  return (
    <div className={classes.CloudPaperClip} onClick={handleImageClick}>
      <img className={classes.Cloud} alt="text cloud" src={cloud}></img>
      <span className={classes.Text}>{textList[textIndex]}</span>
      <img alt="dog gif" className={classes.dogoImg} src={dogo} />
    </div>
  );
}

export default DogGif;
