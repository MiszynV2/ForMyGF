import React, { useEffect, useRef } from "react";
import platform from "../../sources/platform.png";
import hills from "../../sources/hills.png";
import background from "../../sources/background.png";
import cloud from "../../sources/cloud.png";
import floating from "../../sources/floating.png";
import duck from "../../sources/duck.png";
import duckStand from "../../sources/duckStand.png";
import duckLeft from "../../sources/duckLeft.png";
import duckLeftStand from "../../sources/duckLeftStand.png";
import yellowpipe from "../../sources/yellowpipe.png";
import purplepipe from "../../sources/purplepipe.png";
import redpipe from "../../sources/redpipe.png";

const createImage = (imageSrc) => {
  const image = new Image();
  image.src = imageSrc;
  return image;
};

const Game = () => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const animationIdRef = useRef(null);

  const isRightPressedRef = useRef(false);
  const isLeftPressedRef = useRef(false);

  const player = useRef(null);

  const canvasWidth = 850;
  const canvasHeight = 1650;

  const gravity = 0.2;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    contextRef.current = context;

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    player.current = new Player();
    isRightPressedRef.current = false;
    isLeftPressedRef.current = false;

    const handleKeyDown = (event) => {
      if (event.key === "d") {
        isRightPressedRef.current = true;
      } else if (event.key === "a") {
        isLeftPressedRef.current = true;
      } else if (event.key === "w") {
        player.current.jump();
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === "d") {
        isRightPressedRef.current = false;
      } else if (event.key === "a") {
        isLeftPressedRef.current = false;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    animate();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
      cancelAnimationFrame(animationIdRef.current);
    };
  }, []);

  class Player {
    constructor() {
      this.isJumping = false;
      this.isRight = true;
      this.lastIsRight = true;

      this.speed = 3;
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
      this.isOnPlatform = false;
    }

    jump() {
      if (!this.isJumping) {
        this.velocity.y = 78;
        this.isJumping = true;
      }
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
      contextRef.current.drawImage(
        currentImage,
        this.position.x,
        this.position.y
      );
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
        this.velocity.y = -this.speed * 2.4;
        this.isJumping = false;
      }
      if (isLeftPressedRef.current) {
        this.isRight = false;
      } else if (isRightPressedRef.current) {
        this.isRight = true;
      }

      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      if (this.position.y + this.height + this.velocity.y <= canvasHeight)
        this.velocity.y += gravity;
      else this.velocity.y = 0;
      if (
        this.position.x + this.width + this.velocity.x >= canvasWidth ||
        this.position.x + this.width + this.velocity.x <= 0
      )
        this.velocity.x = 0;
      if (this.position.y + this.height + this.velocity.y <= 0) {
        this.velocity.y = 0;
      }
      if (!(this.position.y + this.height + this.velocity.y) < canvasHeight) {
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
        isLeftPressedRef.current ||
        isRightPressedRef.current ||
        this.velocity.x !== 0;

      if (!this.isMoving) {
        if (this.isRight !== this.lastIsRight) {
          this.lastIsRight = this.isRight;
          this.currentAnimationFrame = 0;
        }

        const currentTime = Date.now();
        if (currentTime - this.lastFrameChangeTime >= this.animationInterval) {
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
      contextRef.current.drawImage(
        this.image,
        this.position.x,
        this.position.y
      );
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
      contextRef.current.drawImage(
        this.image,
        this.position.x,
        this.position.y
      );
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
      contextRef.current.drawImage(
        this.image,
        this.position.x,
        this.position.y
      );
    }
  }

  let platformImage = createImage(platform);
  let backgroundImage = createImage(background);
  let hillsImage = createImage(hills);
  let cloudImage = createImage(cloud);
  let floatingImage = createImage(floating);
  let redPipeImage = createImage(redpipe);
  let yellowPipeImage = createImage(yellowpipe);
  let purplePipeImage = createImage(purplepipe);

  let background1 = new Background({ y: 0, x: 0, image: backgroundImage });

  let platforms = [
    new Platform({ y: 628, x: 0, image: platformImage }),
    new Platform({ y: 628, x: platformImage.width, image: platformImage }),
    new Platform({ y: 628, x: platformImage.width * 2, image: platformImage }),
    new Platform({ y: 628, x: platformImage.width * 4, image: platformImage }),
    new Platform({ y: 628, x: platformImage.width * 5, image: platformImage }),
    new Platform({ y: 628, x: platformImage.width * 6, image: platformImage }),
    new Platform({ y: 628, x: platformImage.width * 7, image: platformImage }),
    new Platform({ y: 528, x: platformImage.width * 3, image: floatingImage }),
    new Platform({ y: 528, x: platformImage.width * 8, image: floatingImage }),
    new Platform({ y: 428, x: platformImage.width * 9, image: floatingImage }),
    new Platform({ y: 328, x: platformImage.width * 10, image: floatingImage }),
    new Platform({ y: 228, x: platformImage.width * 11, image: floatingImage }),
    new Platform({ y: 328, x: platformImage.width * 12, image: floatingImage }),
    new Platform({ y: 128, x: platformImage.width * 13, image: floatingImage }),
    new Platform({ y: 528, x: platformImage.width * 14, image: floatingImage }),
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
    new Platform({ y: 328, x: platformImage.width * 19, image: redPipeImage }),
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

  function animate() {
    const context = contextRef.current;
    context.fillStyle = "white";
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    background1.draw();
    decorations.forEach((decoration) => {
      decoration.draw();
    });
    platforms.forEach((platform) => {
      platform.draw();
    });

    if (isRightPressedRef.current) {
      player.current.moveRight();
    } else if (isLeftPressedRef.current) {
      player.current.moveLeft();
    } else {
      player.current.stopMoving();
    }
    player.current.update();

    if (isRightPressedRef.current && player.current.position.x < 300) {
      player.current.moveRight();
    } else if (isLeftPressedRef.current && player.current.position.x > 100) {
      player.current.moveLeft();
    } else {
      player.current.stopMoving();
    }
    if (isRightPressedRef.current) {
      scrollOffset += player.current.speed * 2;
      platforms.forEach((platform) => {
        platform.position.x -= player.current.speed * 2;
      });
      decorations.forEach((decoration) => {
        if (decoration.image === cloud) {
          decoration.position.x -= player.current.speed * 0.13;
        } else {
          decoration.position.x -= player.current.speed * 0.13;
        }
      });
    } else if (isLeftPressedRef.current) {
      scrollOffset -= player.current.speed;
      platforms.forEach((platform) => {
        platform.position.x += player.current.speed;
      });
      decorations.forEach((decoration) => {
        if (decoration.image === cloud) {
          decoration.position.x += player.current.speed * 0.13;
        } else {
          decoration.position.x += player.current.speed * 0.13;
        }
      });
    }
    player.current.stopMoving();

    platforms.forEach((platform) => {
      if (
        player.current.position.y + player.current.height <=
          platform.position.y &&
        player.current.position.y +
          player.current.height +
          player.current.velocity.y >=
          platform.position.y &&
        player.current.position.x + player.current.width >=
          platform.position.x &&
        player.current.position.x <= platform.position.x + platform.width
      ) {
        player.current.velocity.y = 0;
        player.current.isOnPlatform = true;
      }
    });

    animationIdRef.current = requestAnimationFrame(animate);
  }

  return <canvas ref={canvasRef}></canvas>;
};

export default Game;
