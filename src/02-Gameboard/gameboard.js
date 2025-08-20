import { createBoard } from "./create-board.js";
import { Ship } from "../01-ship/ship.js";
import { addShip } from "./addShip.js";
import { attack } from "./receiveAttack.js";

export function Gameboard() {
  let board = createBoard();

  let missedAttacks = [];

  const getMissedAttacks = () => missedAttacks;

  const getHitAttacks = () => hitAttacks;

  const getBoard = () => board;

  const resetVariables = () => {
    board = createBoard();
    missedAttacks = [];
    hitAttacks = [];
    shipsSunk = 0;
  };

  function restartBoard() {
    board = createBoard();
  }

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
    return attack(
      coordinate,
      board,
      getMissedAttacks,
      addShipsSunk,
      getHitAttacks
    );
  }

  return {
    getBoard,
    placeShip,
    receiveAttack,
    getHitAttacks,
    totalShipSunk,
    getMissedAttacks,
    resetVariables,
    restartBoard,
  };
}
