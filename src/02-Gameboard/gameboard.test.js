import { Gameboard } from "./gameboard.js";
import { Ship } from "../01-ship/ship.js";

describe("Gameboard", () => {
  const game = Gameboard();

  test("Should have game defined", () => {
    expect(game).toBeDefined();
  });

  test("Should place ship at coordinates", () => {
    game.placeShip("Patrol Boat", 2, [0, 0], [0, 1]);

    let ship = new Ship("Patrol Boat", 2);

    let board = [
      [[ship, 0], [ship, 0], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
      [[], [], [], [], [], [], [], [], [], []],
    ];
    expect(game.getBoard()).toStrictEqual(board);
  });
});

describe("Receiving Attack", () => {
  const game = Gameboard();
  game.placeShip("Submarine", 3, [5, 5], [5, 7]);
  test("Should hit ship", () => {
    game.receiveAttack([5, 5]);

    expect(game.getBoard()[5][5][0].timesHit).toBe(1);
  });

  test("Should store missed attacks", () => {
    game.receiveAttack([0, 0]);
    expect(game.missedAttacks).toContainEqual([0, 0]);
  });
});

describe("Sinking Ship", () => {
  const game = Gameboard();
  game.placeShip("Patrol Boat", 2, [0, 0], [0, 1]);
  game.placeShip("Submarine", 3, [3, 1], [5, 1]);
  game.placeShip("Destroyer", 3, [9, 9], [9, 7]);
  game.placeShip("Battleship", 4, [8, 4], [8, 7]);
  game.placeShip("Carrier", 5, [2, 2], [6, 2]);
  test("Sinking a ship", () => {
    game.receiveAttack([0, 0]);
    game.receiveAttack([0, 1]);
    game.receiveAttack([3, 1]);
    game.receiveAttack([4, 1]);
    game.receiveAttack([5, 1]);
    game.receiveAttack([9, 9]);
    game.receiveAttack([9, 8]);
    game.receiveAttack([9, 7]);
    game.receiveAttack([8, 4]);
    game.receiveAttack([8, 5]);
    game.receiveAttack([8, 6]);
    game.receiveAttack([8, 7]);
    game.receiveAttack([2, 2]);
    game.receiveAttack([3, 2]);
    game.receiveAttack([4, 2]);
    game.receiveAttack([5, 2]);
    game.receiveAttack([6, 2]);

    expect(game.totalShipSunk()).toBeTruthy();
  });
});
