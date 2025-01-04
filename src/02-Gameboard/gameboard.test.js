import { Gameboard } from "./gameboard.js";

describe("Gameboard", () => {
  const game = Gameboard();

  test("Should have game defined", () => {
    expect(game).toBeDefined();
  });

  test("Should place ship at coordinates", () => {
    game.placeShip("Patrol Boat", 2, [0, 0], [0, 1]);

    let board = [
      [
        [{ name: "Patrol Boat", length: 2, timesHit: 0 }],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
      ],
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
    expect(game.getBoard()).toBe(board);
  });
});
