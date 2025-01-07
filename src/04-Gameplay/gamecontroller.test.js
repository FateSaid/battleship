import { GameController } from "./gamecontroller.js";

describe("Testing Gameplay", () => {
  let gameplay = GameController("User", "Computer");
  it("Should unveil activePlayer", () => {
    expect(gameplay.getActivePlayer().name).toBe("User");
  });

  it("Should unveil opponent", () => {
    expect(gameplay.getOpponent().name).toBe("Computer");
  });
});

describe("Playround", () => {
  let gameplay = GameController("User", "Computer");

  it("User should attack Computer board and hit target", () => {
    gameplay.playRound([5, 0]);
    expect(gameplay.getActivePlayer().game.getBoard()[5][0].timesHit).toBe(1);
  });

  it("User should miss and store missedAttack coordinate", () => {
    gameplay.playRound([9, 9]);
    expect(gameplay.getActivePlayer().game.missedAttacks).toContainEqual([
      9, 9,
    ]);
  });
});

describe("Calculate Winner", () => {
  let gameplay = GameController("User", "Computer");
  /* Player 1 
  [0, 0], [0, 4];
  [4, 3], [4, 5];
  [5, 5], [5, 8]
  [8, 7], [8, 9];
  [2, 4], [2, 5]; */

  /*Player 2 
  [5, 0], [9, 0];
  [3, 7], [3, 9];
  [0, 4], [0, 7]
  [5, 7], [7, 7];
  [0, 9], [1, 9]; */

  gameplay.playRound([5, 0]);
  gameplay.playRound([0, 0]);
  gameplay.playRound([6, 0]);
  gameplay.playRound([0, 1]);
  gameplay.playRound([7, 0]);
  gameplay.playRound([0, 2]);
  gameplay.playRound([8, 0]);
  gameplay.playRound([0, 3]);
  gameplay.playRound([9, 0]);
  gameplay.playRound([0, 4]);
  gameplay.playRound([3, 7]);
  gameplay.playRound([4, 3]);
  gameplay.playRound([3, 8]);
  gameplay.playRound([4, 4]);
  gameplay.playRound([3, 9]);
  gameplay.playRound([4, 5]);
  gameplay.playRound([0, 4]);
  gameplay.playRound([5, 5]);
  gameplay.playRound([0, 5]);
  gameplay.playRound([5, 6]);
  gameplay.playRound([0, 6]);
  gameplay.playRound([5, 7]);
  gameplay.playRound([0, 7]);
  gameplay.playRound([5, 8]);
  gameplay.playRound([5, 7]);
  gameplay.playRound([8, 7]);
  gameplay.playRound([6, 7]);
  gameplay.playRound([8, 8]);
  gameplay.playRound([7, 7]);
  gameplay.playRound([8, 9]);
  gameplay.playRound([0, 9]);
  gameplay.playRound([2, 4]);

  expect(gameplay.playRound([1, 9])).toBe("Winner is User");
});
