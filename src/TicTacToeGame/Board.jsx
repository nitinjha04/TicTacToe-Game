import React, { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      }
    }
    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }

    const turn = [...state];
    turn[index] = isXTurn ? "X" : "O";
    setState(turn);
    setIsXTurn(!isXTurn);
  };

  const handleReset = () => {
    setState(Array(9).fill(null));
  };

  return (
    <div className="board-container">
      <h1>Tic Tac Toe</h1>
        <>
          <div className="board-row">
            <Square handleClick={() => handleClick(0)} value={state[0]} />
            <Square handleClick={() => handleClick(1)} value={state[1]} />
            <Square handleClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square handleClick={() => handleClick(3)} value={state[3]} />
            <Square handleClick={() => handleClick(4)} value={state[4]} />
            <Square handleClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square handleClick={() => handleClick(6)} value={state[6]} />
            <Square handleClick={() => handleClick(7)} value={state[7]} />
            <Square handleClick={() => handleClick(8)} value={state[8]} />
          </div>

          {isWinner ? (
          <>
            <p className="winnerText">winner {isWinner}</p>
            <button onClick={handleReset} className="againButton">Want To Play Again</button>
          </>
        ) : (
          <></>
        )}
        </>
    </div>
  );
};

export default Board;
