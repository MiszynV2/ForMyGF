import React, { useEffect, useState } from "react";
import platform from "../../sources/platform.png";
import hills from "../../sources/hills.png";
import background from "../../sources/background.png";
import cloud from "../../sources/cloud.png";
import floating from "../../sources/floating.png";
import html from "../../sources/html.png";
import css from "../../sources/css.png";
import js from "../../sources/js.png";
import react from "../../sources/react.png";
import duck from "../../sources/duck.png";
import duckStand from "../../sources/duckStand.png";
import duckLeft from "../../sources/duckLeft.png";
import duckLeftStand from "../../sources/duckLeftStand.png";
import github from "../../sources/github.png";
import python from "../../sources/python.png";
import yellowpipe from "../../sources/yellowpipe.png";
import purplepipe from "../../sources/purplepipe.png";
import redpipe from "../../sources/redpipe.png";

const Game = () => {
  const [isRightPressed, setIsRightPressed] = useState(false);
  const [isLeftPressed, setIsLeftPressed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowRight":
          console.log("rrr");
          setIsRightPressed(true);
          break;
        case "ArrowLeft":
          console.log("lll");
          setIsLeftPressed(true);
          break;
        default:
          break;
      }
    };

    const handleKeyUp = (event) => {
      switch (event.key) {
        case "ArrowRight":
          setIsRightPressed(false);
          break;
        case "ArrowLeft":
          setIsLeftPressed(false);
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  console.log(isRightPressed, "  czy jest prawy?");
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    const c = canvas.getContext("2d");

    canvas.width = 1000;
    canvas.height = 700;

    const gravity = 0.2;

    class Player {
      constructor() {
        this.isJumping = false;
        this.isRight = true;
        this.lastIsRight = true;

        this.speed = 6;
        this.position = {
          x: 100,
          y: 100,
        };

        this.velocity = {
          x: 0,
          y: 0,
        };

        this.width = createImage(duck).width;
        this.height = createImage(duck).height;
        this.imageRight = createImage(duck);
        this.imageLeft = createImage(duckLeft);
        this.imageStand = createImage(duckStand);
        this.imageLeftStand = createImage(duckLeftStand);
        this.animationFramesRight = [this.imageRight, this.imageStand];
        this.animationFramesLeft = [this.imageLeft, this.imageLeftStand];
        this.currentAnimationFrame = 0;
        this.animationInterval = 800;
        this.lastFrameChangeTime = 0;
        this.isMoving = false;
      }

      moveRight() {
        this.velocity.x = this.speed;
      }

      moveLeft() {
        this.velocity.x = -this.speed;
      }

      stopMoving() {
        this.velocity.x = 0;
      }

      draw() {
        let currentImage;
        if (this.isRight) {
          currentImage = this.animationFramesRight[this.currentAnimationFrame];
        } else {
          currentImage = this.animationFramesLeft[this.currentAnimationFrame];
        }
        c.drawImage(currentImage, this.position.x, this.position.y);
      }

      update() {
        if (this.velocity.x !== 0 || this.velocity.y !== 0) {
          this.isMoving = true;
        } else {
          this.isMoving = false;
        }
        if (this.velocity.x > 0) {
          this.isRight = true;
        } else if (this.velocity.x < 0) {
          this.isRight = false;
        }
        if (this.isOnPlatform && this.isJumping) {
          this.velocity.y = -this.speed * 1.4;
          this.isJumping = false;
        }
        if (isLeftPressed) {
          this.isRight = false;
        } else if (isRightPressed) {
          this.isRight = true;
        }

        this.position.y += this.velocity.y;
        this.position.x += this.velocity.x;

        if (this.position.y + this.height + this.velocity.y <= canvas.height)
          this.velocity.y += gravity;
        else this.velocity.y = 0;
        if (
          this.position.x + this.width + this.velocity.x >= canvas.width ||
          this.position.x + this.width + this.velocity.x <= 0
        )
          this.velocity.x = 0;
        if (this.position.y + this.height + this.velocity.y <= 0) {
          this.velocity.y = 0;
        }
        if (
          !(this.position.y + this.height + this.velocity.y) < canvas.height
        ) {
          if (this.velocity.x > 0) {
            this.velocity.x *= 0.95;
          }
          if (this.velocity.x < 0) {
            this.velocity.x *= 0.95;
          }
        }
        if (this.isRight !== this.lastIsRight) {
          this.lastIsRight = this.isRight;
          this.currentAnimationFrame = 0;
        }

        this.isMoving =
          isLeftPressed || isRightPressed || this.velocity.x !== 0;

        if (!this.isMoving) {
          if (this.isRight !== this.lastIsRight) {
            this.lastIsRight = this.isRight;
            this.currentAnimationFrame = 0;
          }

          const currentTime = Date.now();
          if (
            currentTime - this.lastFrameChangeTime >=
            this.animationInterval
          ) {
            this.lastFrameChangeTime = currentTime;
            if (this.isRight || this.lastIsRight) {
              this.currentAnimationFrame =
                (this.currentAnimationFrame + 1) %
                this.animationFramesRight.length;
            } else {
              this.currentAnimationFrame =
                (this.currentAnimationFrame + 1) %
                this.animationFramesLeft.length;
            }
          }
        }

        this.draw();
      }
    }

    class Platform {
      constructor({ x, y, image }) {
        this.position = {
          x,
          y,
        };
        this.image = image;
        this.width = image.width;
        this.height = image.height;
      }
      draw() {
        c.drawImage(this.image, this.position.x, this.position.y);
      }
    }

    class Decoration {
      constructor({ x, y, image }) {
        this.position = {
          x,
          y,
        };
        this.image = image;
        this.width = createImage(image).width;
        this.height = createImage(image).height;
      }
      draw() {
        c.drawImage(this.image, this.position.x, this.position.y);
      }
    }

    class Background {
      constructor({ x, y, image }) {
        this.position = {
          x,
          y,
        };
        this.image = image;
        this.width = createImage(image).width;
        this.height = createImage(image).height;
      }
      draw() {
        c.drawImage(this.image, this.position.x, this.position.y);
      }
    }

    let platformImage = createImage(platform);
    let backgroundImage = createImage(background);
    let hillsImage = createImage(hills);
    let cloudImage = createImage(cloud);
    let floatingImage = createImage(floating);
    let reactImage = createImage(react);
    let githubImage = createImage(github);
    let cssImage = createImage(css);
    let htmlImage = createImage(html);
    let pythonImage = createImage(python);
    let jsImage = createImage(js);
    let redPipeImage = createImage(redpipe);
    let yellowPipeImage = createImage(yellowpipe);
    let purplePipeImage = createImage(purplepipe);

    let background1 = new Background({ y: 0, x: 0, image: backgroundImage });

    let player = new Player();

    let platforms = [
      new Platform({ y: 628, x: 0, image: platformImage }),
      new Platform({ y: 628, x: platformImage.width, image: platformImage }),
      new Platform({
        y: 628,
        x: platformImage.width * 2,
        image: platformImage,
      }),
      new Platform({
        y: 628,
        x: platformImage.width * 4,
        image: platformImage,
      }),
      new Platform({
        y: 628,
        x: platformImage.width * 5,
        image: platformImage,
      }),
      new Platform({
        y: 628,
        x: platformImage.width * 6,
        image: platformImage,
      }),
      new Platform({
        y: 628,
        x: platformImage.width * 7,
        image: platformImage,
      }),
      new Platform({
        y: 528,
        x: platformImage.width * 3,
        image: floatingImage,
      }),
      new Platform({
        y: 528,
        x: platformImage.width * 8,
        image: floatingImage,
      }),
      new Platform({
        y: 428,
        x: platformImage.width * 9,
        image: floatingImage,
      }),
      new Platform({
        y: 328,
        x: platformImage.width * 10,
        image: floatingImage,
      }),
      new Platform({
        y: 228,
        x: platformImage.width * 11,
        image: floatingImage,
      }),
      new Platform({
        y: 328,
        x: platformImage.width * 12,
        image: floatingImage,
      }),
      new Platform({
        y: 128,
        x: platformImage.width * 13,
        image: floatingImage,
      }),
      new Platform({
        y: 528,
        x: platformImage.width * 14,
        image: floatingImage,
      }),
      new Platform({
        y: 428,
        x: platformImage.width * 15,
        image: yellowPipeImage,
      }),
      new Platform({
        y: 328,
        x: platformImage.width * 16,
        image: yellowPipeImage,
      }),
      new Platform({
        y: 428,
        x: platformImage.width * 17,
        image: purplePipeImage,
      }),
      new Platform({
        y: 328,
        x: platformImage.width * 18,
        image: purplePipeImage,
      }),
      new Platform({
        y: 328,
        x: platformImage.width * 19,
        image: redPipeImage,
      }),
      new Platform({
        y: 428,
        x: platformImage.width * 20,
        image: yellowPipeImage,
      }),
    ];

    let decorations = [
      new Decoration({ y: 0, x: 0, image: backgroundImage }),
      new Decoration({ y: 548, x: 0, image: hillsImage }),
      new Decoration({ y: 548, x: 400, image: hillsImage }),
      new Decoration({ y: 548, x: 750, image: hillsImage }),
      new Decoration({ y: 548, x: 750, image: hillsImage }),
      new Decoration({ y: 148, x: 100, image: cloudImage }),
      new Decoration({ y: 348, x: 120, image: cloudImage }),
      new Decoration({ y: 248, x: 150, image: cloudImage }),
      new Decoration({ y: 148, x: 300, image: cloudImage }),
      new Decoration({ y: 248, x: 350, image: cloudImage }),
      new Decoration({ y: 448, x: 450, image: cloudImage }),
      new Decoration({ y: 648, x: 550, image: cloudImage }),
      new Decoration({ y: 348, x: 850, image: cloudImage }),
      new Decoration({ y: 348, x: 750, image: cloudImage }),
      new Decoration({ y: 548, x: 950, image: cloudImage }),
      new Decoration({ y: 148, x: 1000, image: cloudImage }),
    ];

    let scrollOffset = 0;

    function init() {
      platformImage = createImage(platform);
      backgroundImage = createImage(background);
      hillsImage = createImage(hills);
      cloudImage = createImage(cloud);
      floatingImage = createImage(floating);
      reactImage = createImage(react);
      githubImage = createImage(github);
      cssImage = createImage(css);
      htmlImage = createImage(html);
      pythonImage = createImage(python);
      jsImage = createImage(js);
      redPipeImage = createImage(redpipe);
      yellowPipeImage = createImage(yellowpipe);
      purplePipeImage = createImage(purplepipe);

      background1 = new Background({ y: 0, x: 0, image: backgroundImage });

      player = new Player();

      platforms = [
        new Platform({ y: 628, x: 0, image: platformImage }),
        new Platform({ y: 628, x: platformImage.width, image: platformImage }),
        new Platform({
          y: 628,
          x: platformImage.width * 2,
          image: platformImage,
        }),
        new Platform({
          y: 628,
          x: platformImage.width * 4,
          image: platformImage,
        }),
        new Platform({
          y: 628,
          x: platformImage.width * 5,
          image: platformImage,
        }),
        new Platform({
          y: 628,
          x: platformImage.width * 6,
          image: platformImage,
        }),
        new Platform({
          y: 628,
          x: platformImage.width * 7,
          image: platformImage,
        }),
        new Platform({
          y: 528,
          x: platformImage.width * 3,
          image: floatingImage,
        }),
        new Platform({
          y: 528,
          x: platformImage.width * 8,
          image: floatingImage,
        }),
        new Platform({
          y: 428,
          x: platformImage.width * 9,
          image: floatingImage,
        }),
        new Platform({
          y: 328,
          x: platformImage.width * 10,
          image: floatingImage,
        }),
        new Platform({
          y: 228,
          x: platformImage.width * 11,
          image: floatingImage,
        }),
        new Platform({
          y: 328,
          x: platformImage.width * 12,
          image: floatingImage,
        }),
        new Platform({
          y: 128,
          x: platformImage.width * 13,
          image: floatingImage,
        }),
        new Platform({
          y: 528,
          x: platformImage.width * 14,
          image: floatingImage,
        }),
        new Platform({
          y: 428,
          x: platformImage.width * 15,
          image: yellowPipeImage,
        }),
        new Platform({
          y: 328,
          x: platformImage.width * 16,
          image: yellowPipeImage,
        }),
        new Platform({
          y: 428,
          x: platformImage.width * 17,
          image: purplePipeImage,
        }),
        new Platform({
          y: 328,
          x: platformImage.width * 18,
          image: purplePipeImage,
        }),
        new Platform({
          y: 328,
          x: platformImage.width * 19,
          image: redPipeImage,
        }),
        new Platform({
          y: 428,
          x: platformImage.width * 20,
          image: yellowPipeImage,
        }),
      ];
      decorations = [
        new Decoration({ y: 0, x: 0, image: backgroundImage }),
        new Decoration({ y: 548, x: 0, image: hillsImage }),
        new Decoration({ y: 548, x: 400, image: hillsImage }),
        new Decoration({ y: 548, x: 750, image: hillsImage }),
        new Decoration({ y: 548, x: 750, image: hillsImage }),
        new Decoration({ y: 148, x: 100, image: cloudImage }),
        new Decoration({ y: 348, x: 120, image: cloudImage }),
        new Decoration({ y: 248, x: 150, image: cloudImage }),
        new Decoration({ y: 148, x: 300, image: cloudImage }),
        new Decoration({ y: 248, x: 350, image: cloudImage }),
        new Decoration({ y: 448, x: 450, image: cloudImage }),
        new Decoration({ y: 648, x: 550, image: cloudImage }),
        new Decoration({ y: 348, x: 850, image: cloudImage }),
        new Decoration({ y: 348, x: 750, image: cloudImage }),
        new Decoration({ y: 548, x: 950, image: cloudImage }),
        new Decoration({ y: 148, x: 1000, image: cloudImage }),
      ];

      let scrollOffset = 0;
    }

    function animate() {
      requestAnimationFrame(animate);
      c.fillStyle = "white";
      c.clearRect(0, 0, canvas.width, canvas.height);
      background1.draw();
      decorations.forEach((decoration) => {
        decoration.draw();
      });
      platforms.forEach((platform) => {
        platform.draw();
      });

      player.update();

      if (isRightPressed && player.position.x < canvas.width / 3) {
        player.moveRight();
      } else if (isLeftPressed && player.position.x > 100) {
        player.moveLeft();
      } else {
        if (isRightPressed) {
          scrollOffset += player.speed;
          platforms.forEach((platform) => {
            platform.position.x -= player.speed;
          });
          decorations.forEach((decoration) => {
            if (decoration.image === cloud) {
              decoration.position.x -= player.speed * 0.13;
            } else {
              decoration.position.x -= player.speed * 0.43;
            }
          });
        } else if (isLeftPressed) {
          scrollOffset -= player.speed;
          platforms.forEach((platform) => {
            platform.position.x += player.speed;
          });
          decorations.forEach((decoration) => {
            if (decoration.image === cloud) {
              decoration.position.x += player.speed * 0.13;
            } else {
              decoration.position.x += player.speed * 0.43;
            }
          });
        }
        player.stopMoving();
      }

      platforms.forEach((platform) => {
        if (
          player.position.y + player.height <= platform.position.y &&
          player.position.y + player.height + player.velocity.y >=
            platform.position.y &&
          player.position.x + player.width >= platform.position.x &&
          player.position.x <= platform.position.x + platform.width
        ) {
          player.velocity.y = 0;
          player.isOnPlatform = true;
        }
      });

      if (scrollOffset > 2000) {
        // Obsłuż dalszą logikę gry tutaj
      }

      if (player.position.y + 120 >= 700) {
        console.log("Przegrałeś");
        init();
      }
    }

    animate();
  }, []);

  function createImage(imageSrc) {
    const image = new Image();
    image.src = imageSrc;
    return image;
  }

  return <canvas></canvas>;
};

export default Game;
