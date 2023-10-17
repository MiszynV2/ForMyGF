import React, { useState } from "react";
import classes from "./Minesweeper.module.css";
import bomb from "../sources/bomb.png";
import repeat from "../sources/repeat.svg";

function MinesweeperGame({ Restart }) {
  const [board, setBoard] = useState(generateBoard(8, 8, 10));
  const [started, setStarted] = useState(false);
  function generateBoard(rows, columns, mines) {
    const board = [];
    for (let i = 0; i < rows; i++) {
      board.push([]);
      for (let j = 0; j < columns; j++) {
        board[i][j] = {
          value: 0, //(0 represents empty)
          revealed: false,
        };
      }
    }

    let minesPlaced = 0;
    while (minesPlaced < mines) {
      const randomRow = Math.floor(Math.random() * rows);
      const randomCol = Math.floor(Math.random() * columns);

      if (board[randomRow][randomCol].value !== "M") {
        board[randomRow][randomCol].value = "M";
        minesPlaced++;
      }
    }

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        if (board[row][col].value === "M") {
          continue;
        }

        let count = 0;
        for (let i = -1; i <= 1; i++) {
          for (let j = -1; j <= 1; j++) {
            const newRow = row + i;
            const newCol = col + j;
            if (
              newRow >= 0 &&
              newRow < rows &&
              newCol >= 0 &&
              newCol < columns
            ) {
              if (board[newRow][newCol].value === "M") {
                count++;
              }
            }
          }
        }

        board[row][col].value = count;
      }
    }

    return board;
  }

  function revealCell(row, col) {
    if (!started) {
      setStarted(true);
      const newBoard = generateBoard(board.length, board[0].length, 10);
      setBoard(newBoard);
    }

    const updatedBoard = [...board];

    updatedBoard[row][col].revealed = true;

    if (updatedBoard[row][col].value === 0) {
      revealAdjacentCells(row, col, updatedBoard);
    }

    setBoard(updatedBoard);
  }

  function revealAdjacentCells(row, col, board) {
    const directions = [
      { x: -1, y: -1 },
      { x: -1, y: 0 },
      { x: -1, y: 1 },
      { x: 0, y: -1 },
      { x: 0, y: 1 },
      { x: 1, y: -1 },
      { x: 1, y: 0 },
      { x: 1, y: 1 },
    ];

    for (const dir of directions) {
      const newRow = row + dir.x;
      const newCol = col + dir.y;

      if (
        isValidCell(newRow, newCol, board) &&
        !board[newRow][newCol].revealed
      ) {
        board[newRow][newCol].revealed = true;

        if (board[newRow][newCol].value === 0) {
          revealAdjacentCells(newRow, newCol, board);
        }
      }
    }
  }
  function isValidCell(row, col, board) {
    return row >= 0 && row < board.length && col >= 0 && col < board[0].length;
  }
  function renderGrid() {
    return (
      <div className={classes.GameWrapper}>
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className={classes.Row}>
            {row.map((cell, colIndex) => (
              <div
                key={colIndex}
                className={`${classes.Cell} ${
                  cell.revealed ? classes.Revealed : ""
                } `}
                onClick={() => revealCell(rowIndex, colIndex)}
              >
                {cell.revealed && cell.value !== 0 && cell.value !== "M" ? (
                  cell.value
                ) : cell.revealed && cell.value === "M" ? (
                  <div>
                    <img src={bomb} alt="Bomb" className={classes.Bomb} />
                    <div className={classes.RepeatButtonContainer}>
                      <img
                        onClick={Restart}
                        src={repeat}
                        alt="Repeat"
                        className={classes.RepeatButton}
                      />
                    </div>{" "}
                  </div>
                ) : (
                  ""
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return <div className={classes.MinesweeperGame}>{renderGrid()}</div>;
}

export default MinesweeperGame;
