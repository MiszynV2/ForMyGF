import React, { useState, useEffect } from "react";
import classes from "./Quiz.module.css";

function Quiz({ handleFolderSelection }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const handleCloseClick = () => {
    handleFolderSelection(0);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX - offsetX);
    setStartY(e.clientY - offsetY);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newOffsetX = e.clientX - startX;
      const newOffsetY = e.clientY - startY;
      setOffsetX(newOffsetX);
      setOffsetY(newOffsetY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const chatGptWrapper = document.getElementById("chat-gpt-wrapper");
    if (chatGptWrapper) {
      const { top, left, right, bottom } =
        chatGptWrapper.getBoundingClientRect();
      if (left < 0) {
        setOffsetX(offsetX - left);
      } else if (right > windowWidth) {
        setOffsetX(offsetX - (right - windowWidth));
      }
      if (top < 0) {
        setOffsetY(offsetY - top);
      } else if (bottom > windowHeight) {
        setOffsetY(offsetY - (bottom - windowHeight));
      }
    }
  }, [offsetX, offsetY, windowWidth, windowHeight]);

  const handleCellClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);

    const winningCombination = calculateWinner(newBoard);
    if (winningCombination) {
      setWinner(newBoard[winningCombination[0]]);
    }
  };

  const calculateWinner = (currentBoard) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return combination;
      }
    }

    return null;
  };

  const renderCell = (index) => {
    const value = board[index];
    return (
      <div className={classes.Cell} onClick={() => handleCellClick(index)}>
        {value}
      </div>
    );
  };

  const renderBoard = () => {
    return (
      <div className={classes.GameBoard}>
        {board.map((cell, index) => (
          <React.Fragment key={index}>
            {renderCell(index)}
            {(index + 1) % 3 === 0 && <div className={classes.Clear}></div>}
          </React.Fragment>
        ))}
      </div>
    );
  };

  const renderGameResult = () => {
    if (winner) {
      return <div className={classes.GameResult}>Wygrał: {winner}</div>;
    } else if (!board.includes(null)) {
      return <div className={classes.GameResult}>Remis!</div>;
    }
    return null;
  };

  return (
    <div
      className={classes.QuizWrapper}
      style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div className={classes.TitleBar}>
        <div className={classes.Title}>A jednak kółko i krzyżyk</div>
        <div className={classes.Icons}>
          <div className={classes.CloseButton} onClick={handleCloseClick}></div>
        </div>
      </div>
      {renderBoard()}
      {renderGameResult()}
    </div>
  );
}

export default Quiz;
