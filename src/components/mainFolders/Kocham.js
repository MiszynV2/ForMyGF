import React, { useState } from "react";
import classes from "./MainFolder.module.css";
import KochamWindow from "./KochamWindow";
import serce1 from "../../sources/serce1.jpg";
import serce2 from "../../sources/serce2.jpg";
import serce3 from "../../sources/serce3.jpg";
import serce4 from "../../sources/serce4.jpg";
import serce5 from "../../sources/serce5.jpg";
import serce6 from "../../sources/serce6.jpg";

function Kocham({ handleFolderSelection }) {
  const [images, setImages] = useState([
    { image: serce1, title: "Kocham" },
    { image: serce2, title: "Ciebie" },
    { image: serce3, title: "Najmocniej" },
    { image: serce4, title: "Na" },
    { image: serce5, title: "Świecie" },
    { image: serce6, title: "<333333333" },
  ]);

  const handleCloseClick = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div className={classes.KochamWrapper}>
      {images.map((image, index) => (
        <KochamWindow
          key={index}
          title={image.title}
          image={image.image}
          onClose={() => handleCloseClick(index)}
          style={{
            position: "absolute",
            left: index === 0 ? "100px" : "auto",
            top: index === 0 ? "300px" : "auto",
            transform:
              index === 0
                ? "none"
                : `translate(${index * 20}px, ${index * 20}px)`,
            zIndex: images.length - index,
          }}
        />
      ))}
    </div>
  );
}

export default Kocham;
