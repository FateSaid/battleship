import { GameController } from "./gamecontroller.js";

describe("Testing Player action", () => {
  let gameplay = GameController("User", "Computer");

  test("Player 2 should be computer", () => {
    let players = gameplay.getPlayers();

    expect(players[1].name).toBe("Computer");
  });

  test("Player should not attack same coordinates", () => {
    gameplay.playRound([9, 9]);
    gameplay.playRound([0, 5]);
    expect(() => gameplay.playRound([9, 9])).toThrow();
  });
});

describe("Testing Computer action", () => {
  let gameplay = GameController("User", "Computer");

  test("Computer should attack random coordinate", () => {
    gameplay.playRound([0, 0]);

    expect(gameplay.getActivePlayer().name).toBe("User");
  });
});

describe("Checking hitAttacks and missedAttacks", () => {
  let gameplay = GameController("User", "Tom");

  gameplay.playRound([0, 0]);

  gameplay.playRound([1, 1]);

  expect(gameplay.getActivePlayer().game.hitAttacks).toEqual([]);
});
