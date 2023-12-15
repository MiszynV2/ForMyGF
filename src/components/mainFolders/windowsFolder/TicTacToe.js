import React, { useState, useEffect } from "react";
import classes from "./Quiz.module.css";
import Window from "../../Atoms/Window";
import TitleBar from "../../Atoms/TitleBar";
import image from "../../../sources/heart.svg";

function Quiz({ close }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const title = "Tic Tac Toe";

  useEffect(() => {
    if (!isXNext) {
      const randomEmptyCell = getRandomEmptyCell();
      if (randomEmptyCell !== null) {
        setTimeout(function () {
          handleCellClick(randomEmptyCell);
        }, 500);
      }
    }
  }, [isXNext]);

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

  const getRandomEmptyCell = () => {
    const emptyCells = [];
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        emptyCells.push(i);
      }
    }

    if (emptyCells.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    return emptyCells[randomIndex];
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
    <Window width={300}>
      <TitleBar image={image} title={title} close={close} />
      {renderBoard()}
      {renderGameResult()}
    </Window>
  );
}

export default Quiz;
