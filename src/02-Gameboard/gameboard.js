import { createBoard } from "./create-board.js";
import { Ship } from "../01-ship/ship.js";
import { addShip } from "./addShip.js";

export function Gameboard() {
  let board = createBoard();

  const getBoard = () => board;

  function placeShip(name, length, start, end) {
    let ship = new Ship(name, length);

    addShip(board, ship, start, end);
  }

  return {
    getBoard,
    placeShip,
  };
}
