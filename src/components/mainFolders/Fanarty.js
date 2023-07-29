import React, { useState } from "react";
import classes from "./MainFolder.module.css";
import KochamWindow from "./KochamWindow";
import fanart1 from "../../sources/fanart1.png";
import fanart2 from "../../sources/fanart2.png";
import fanart3 from "../../sources/fanart3.png";
import fanart4 from "../../sources/fanart4.png";
import fanart5 from "../../sources/fanart5.png";
import fanart6 from "../../sources/fanart6.png";
import fanart7 from "../../sources/fanart7.png";
import fanart8 from "../../sources/fanart8.png";
import fanart9 from "../../sources/fanart9.png";
import fanart10 from "../../sources/fanart10.png";
import fanart11 from "../../sources/fanart11.png";

function Kocham({ handleFolderSelection }) {
  const [images, setImages] = useState([
    { image: fanart1, title: "Pierwsze spotkanie" },
    { image: fanart2, title: "Impreza u Wojtka" },
    { image: fanart3, title: "Zostajemy razem (4ever)" },
    { image: fanart4, title: "Pierwszy film" },
    { image: fanart5, title: "Noc u Kaia" },
    { image: fanart6, title: "Krzyk i my" },
    { image: fanart7, title: "Gotowanie na wolnej chacie" },
    { image: fanart8, title: "Wspólne Wędkowanie" },
    { image: fanart9, title: "Incydent łazienkowy" },
    { image: fanart10, title: "Razem na polu" },
    { image: fanart11, title: "Sesja w basenie" },
  ]);

  const handleCloseClick = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <>
      {images.map((image, index) => (
        <KochamWindow
          key={index}
          title={image.title}
          image={image.image}
          onClose={() => handleCloseClick(index)}
        />
      ))}
    </>
  );
}

export default Kocham;
