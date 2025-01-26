import { createBoard } from "./create-board.js";
import { Ship } from "../01-ship/ship.js";
import { addShip } from "./addShip.js";
import { attack } from "./receiveAttack.js";

export function Gameboard() {
  let board = createBoard();

  let missedAttacks = [];

  const getBoard = () => board;

  let shipsSunk = 0;

  let hitAttacks = [];

  const getShipSunk = () => shipsSunk;

  function addShipsSunk() {
    shipsSunk += 1;
  }

  function totalShipSunk() {
    if (getShipSunk() === 5) {
      return true;
    }
  }

  function placeShip(name, length, start, end) {
    let ship = new Ship(name, length);

    addShip(ship, start, end, board);
  }

  function receiveAttack(coordinate) {
    attack(coordinate, board, missedAttacks, addShipsSunk, hitAttacks);
  }

  return {
    getBoard,
    placeShip,
    receiveAttack,
    missedAttacks,
    totalShipSunk,
    hitAttacks,
  };
}
