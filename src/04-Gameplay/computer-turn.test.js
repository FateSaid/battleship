import { GameController } from "./gamecontroller.js";
import { checkDuplicate } from "./computer-move.js";

describe("Testing Player action", () => {
  let gameplay = GameController("User", "Computer");

  test("Player 2 should be computer", () => {
    let players = gameplay.getPlayers();

    expect(players[1].name).toBe("Computer");
  });

  test("Player should not attack same coordinates", () => {
    gameplay.playRound([9, 9]);
    gameplay.playRound([0, 5]);

    let opponentMiss = gameplay.getOpponent().game.missedAttacks;

    expect(checkDuplicate(opponentMiss, [9, 9])).toBeFalsy();

    expect(checkDuplicate(opponentMiss, [4, 5])).toBeTruthy();
  });
});

describe("Testing Computer action", () => {
  let gameplay = GameController("User", "Computer");

  test("Computer should attack random coordinate", () => {
    gameplay.playRound([0, 0]);

    expect(gameplay.getActivePlayer().name).toBe("User");
  });
});
