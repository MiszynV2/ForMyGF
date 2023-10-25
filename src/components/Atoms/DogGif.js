import React, { useState } from "react";
import classes from "./DogGif.module.css";
import cloud from "../../sources/dymek.png";
import dogo from "../../sources/dogo.gif";

function DogGif() {
  const textList = [
    "Paint is now available!!!!  (click me for more facts)",
    "Minesweeper is now ready to play! Don't forget to check others difficulties!",
    "Duck.exe has now points system!",
    "You can always write to me via 'contact me' window",
    "'My computer' windows is now in portfolio!!! Duck.exe and contact me is now Better!!! ",
    "Im soo happy to make this project",
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
    "The system had a 'Help and Support' center to provide assistance to users.",
    "In 2013, a team of Japanese scientists successfully grew artificial meat from stem cells.",
    "The Mantis Shrimp has 12 to 16 types of photoreceptor cells for color vision, while humans have only three.",
    "There are more possible iterations of a game of chess than there are atoms in the known universe.",
    "The Eiffel Tower can be 15 cm taller during the summer due to thermal expansion.",
    "Hawaii is moving towards Japan 4 inches every year.",
    "The Sahara Desert was once a lush and green region with a different name: the African Humid Period.",
    "There's a species of jellyfish known as Turritopsis dohrnii that is considered biologically immortal.",
    "The electric chair was invented by a dentist.",
    "The Earth's core is hotter than the surface of the sun.",
    "Octopuses have incredible problem-solving abilities.",
    "A day on Venus is longer than its year. Venus has an extremely slow rotation on its axis, taking about 243 Earth days to complete one rotation.",
    "A single strand of spaghetti is called a 'spaghetto'.",
    "The world's smallest mammal is the bumblebee bat, which weighs less than a penny.",
    "Bananas are berries, while strawberries are not.",
    "Sloths only poop once a week.",
    "The honeybee is the only insect that produces food that humans eat.",
    "There are more fake flamingos than real ones.",
    "The Arctic is not just an ocean of ice; it's surrounded by countries, including the United States, Canada, Russia, and others.",
    "The longest hiccuping spree lasted 68 years.",
    "Koalas have fingerprints that are almost indistinguishable from human fingerprints.",
    "The longest word in the English language without a vowel is 'rhythms.'",
    "An ostrich's eye is bigger than its brain.",
    "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
    "The largest desert in the world is Antarctica.",
    "Only female mosquitoes bite.",
    "In 2007, an American man named Corey Taylor tried to fake his own death to get out of his cell phone contract without paying a fee.",
    "The youngest parents in history were only 8 and 9 years old.",
    "There are more possible iterations of a game of chess than there are atoms in the known universe.",
    "A panda's diet consists almost entirely of bamboo, but they are members of the order Carnivora and have the digestive system of a carnivore.",
    "Wombat feces are cube-shaped.",
    "The unicorn is Scotland's national animal.",
    "Hippopotamus milk is pink.",
    "Antarctica is the driest, windiest, and coldest continent on Earth.",
    "There is a species of jellyfish known as Turritopsis dohrnii that is considered biologically immortal.",
    "Cows have best friends and can become stressed when they are separated.",
    "If you lift a kangaroo's tail off the ground, it can't hop.",
    "A group of flamingos is called a 'flamboyance'.",
    "The pineapple is a symbol of hospitality.",
    "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
    "The Mantis Shrimp has 12 to 16 types of photoreceptor cells for color vision, while humans have only three.",
    "Hawaii consists of 137 islands, not just the eight main islands we often think of.",
    "The electric chair was invented by a dentist.",
    "The Earth's core is hotter than the surface of the sun.",
    "The longest word in the English language without a vowel is 'rhythms.'",
    "Octopuses have incredible problem-solving abilities.",
    "A day on Venus is longer than its year. Venus has an extremely slow rotation on its axis, taking about 243 Earth days to complete one rotation.",
    "A single strand of spaghetti is called a 'spaghetto'.",
    "Sloths only poop once a week.",
    "The honeybee is the only insect that produces food that humans eat.",
    "There are more fake flamingos than real ones.",
    "The Arctic is not just an ocean of ice; it's surrounded by countries, including the United States, Canada, Russia, and others.",
    "The shortest war in history was between Britain and Zanzibar on August 27, 1896. Zanzibar surrendered after 38 minutes.",
    "The largest desert in the world is Antarctica.",
    "Only female mosquitoes bite.",
    "In 2007, an American man named Corey Taylor tried to fake his own death to get out of his cell phone contract without paying a fee.",
    "The youngest parents in history were only 8 and 9 years old.",
    "There are more possible iterations of a game of chess than there are atoms in the known universe.",
    "A panda's diet consists almost entirely of bamboo, but they are members of the order Carnivora and have the digestive system of a carnivore.",
    "Wombat feces are cube-shaped.",
    "The unicorn is Scotland's national animal.",
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
