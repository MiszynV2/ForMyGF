import React, { useState } from "react";
import classes from "./Quiz.module.css";
import Window from "../Atoms/Window";

function Quiz({ handleFolderSelection }) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);

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
    <Window>
      <div className={classes.TitleBar}>
        <div className={classes.Title}>A jednak kółko i krzyżyk</div>
        <div className={classes.Icons}>
          <div
            className={classes.CloseButton}
            onClick={() => {
              handleFolderSelection(0);
            }}
          ></div>
        </div>
      </div>
      {renderBoard()}
      {renderGameResult()}
    </Window>
  );
}

export default Quiz;
