import React, { useState } from "react";
import classes from "./DogGif.module.css";
import cloud from "../../sources/dymek.png";
import dogo from "../../sources/dogo.gif";

function DogGif() {


    const textList = [
      "My computer windows is now in portfolio!!! Duck.exe and contact me is now Better!!! (click me for more facts)"
      "The Eiffel Tower in Paris, France, is 324 meters tall and weighs approximately 10,100 tons.",
      "The Great Barrier Reef in Australia is the world's largest coral reef system and is visible from space.",
      "Penguins are flightless birds that are highly adapted for life in the water.",
      "Cheetahs are the fastest land animals and can reach speeds of up to 75 miles per hour.",
      "Bees can recognize human faces. They can remember and recognize faces for several days.",
      "The longest distance swam by a human without flippers in open water is 225 km (140 miles).",
      "Hippopotamus sweat is red. It acts as a natural sunscreen and antibiotic for their skin.",
      "Octopuses have three hearts. Two pump blood to the gills, while the third pumps it to the rest of the body.",
      "The Komodo dragon is the world's largest lizard and can grow up to 10 feet in length.",
      "Humpback whales are known for their complex songs that can last up to 20 minutes and be heard for miles underwater.",
      "Bananas are berries, while strawberries are not.",
      "Cows have best friends and can become stressed when they are separated.",
      "Some cats are allergic to humans.",
      "Honeybees can recognize a flower in a picture faster than humans.",
      "A group of flamingos is called a 'flamboyance'.",
      "Jellyfish are 95% water and don't have a brain, heart, or bones.",
      "The bumblebee bat is the world's smallest mammal, weighing less than a penny.",
      "The probability of being killed by a vending machine is higher than the probability of being bitten by a shark.",
      "The longest hiccuping spree lasted 68 years.",
      "Koalas have fingerprints that are almost indistinguishable from human fingerprints.",
      "Spiders can't fly, but they can travel through the air using a process called ballooning.",
      "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
      "A day on Venus is longer than its year. Venus has an extremely slow rotation on its axis, taking about 243 Earth days to complete one rotation.",
      "The world's smallest mammal is the bumblebee bat, which weighs less than a penny.",
      "One lightning bolt can power a lightbulb for six months.",
      "Windows XP was released by Microsoft on October 25, 2001.",
      "Windows XP stands for 'eXPerience'.",
      "It introduced Windows Media Player 8.",
      "Windows XP had Internet Explorer 6 as its default web browser.",
      "The 'Luna' theme, with its blue and green color scheme, was iconic for Windows XP.",
      "It was the first Windows operating system to use product activation to combat piracy.",
      "Windows XP's start menu featured a two-column layout and a new 'All Programs' menu.",
      "The system introduced a new wireless networking feature called 'Zero Configuration'.",
      "Windows XP was the last version to include the 'Active Desktop' feature.",
      "It had a simple but addictive built-in game called 'Minesweeper'.",
      "Windows XP supported custom themes and visual styles, which led to a lot of user customization.",
      "It was the first Windows OS to include built-in ZIP file support.",
      "Windows XP was widely used in businesses and became a popular enterprise OS.",
      "This OS featured the 'Fast User Switching' feature to quickly switch between user accounts.",
      "It allowed users to set different wallpapers for different user accounts.",
      "Windows XP introduced the 'Remote Assistance' feature for remote desktop support.",
      "The system had a 'Help and Support' center to provide assistance to users.",
    "Penguins are flightless birds that are highly adapted for life in the water.",
    "Honey never spoils. Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible.",
    "The Great Barrier Reef in Australia is the world's largest coral reef system and is visible from space.",
    "Cheetahs are the fastest land animals and can reach speeds of up to 75 miles per hour.",
    "A day on Venus is longer than its year. Venus has an extremely slow rotation on its axis, taking about 243 Earth days to complete one rotation.",
    "Bees can recognize human faces. They can remember and recognize faces for several days.",
    "The longest distance swam by a human without flippers in open water is 225 km (140 miles).",
    "Hippopotamus sweat is red. It acts as a natural sunscreen and antibiotic for their skin.",
    "The oldest known sample of the smallpox virus dates back to 17th-century Lithuania.",
    "Octopuses have three hearts. Two pump blood to the gills, while the third pumps it to the rest of the body.",
    "The Komodo dragon is the world's largest lizard and can grow up to 10 feet in length.",
    "Humpback whales are known for their complex songs that can last up to 20 minutes and be heard for miles underwater.",
    "Bananas are berries, while strawberries are not.",
    "In 2013, a team of Japanese scientists successfully grew artificial meat from stem cells.",
    "Cows have best friends and can become stressed when they are separated.",
    "Some cats are allergic to humans.",
    "Honeybees can recognize a flower in a picture faster than humans.",
    "A group of flamingos is called a 'flamboyance'.",
    "One lightning bolt can power a lightbulb for six months.",
    "The longest hiccuping spree lasted 68 years.",
    "Koalas have fingerprints that are almost indistinguishable from human fingerprints.",
    "Spiders can't fly, but they can travel through the air using a process called ballooning.",
    "The world's smallest mammal is the bumblebee bat, which weighs less than a penny.",
    "The probability of being killed by a vending machine is higher than the probability of being bitten by a shark.",
    "Jellyfish are 95% water and don't have a brain, heart, or bones.",
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
