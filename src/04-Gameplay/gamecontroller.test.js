import { GameController } from "./gamecontroller.js";
import { SetupShip } from "./setup-ship.js";

describe("Testing Gameplay", () => {
  let gameplay = GameController("User", "User 2");
  it("Should unveil activePlayer", () => {
    expect(gameplay.getActivePlayer().name).toBe("User");
  });

  it("Should unveil opponent", () => {
    expect(gameplay.getOpponent().name).toBe("User 2");
  });
});

describe("Playround", () => {
  let gameplay = GameController("User", "User 2");
  let [play1, play2] = gameplay.getPlayers();
  SetupShip(play1, play2);

  it("User should attack Computer board and hit target", () => {
    gameplay.playRound([5, 0]);
    expect(gameplay.getActivePlayer().game.getBoard()[5][0].timesHit).toBe(1);
  });

  it("User should miss and store missedAttack coordinate", () => {
    gameplay.playRound([9, 9]);
    expect(gameplay.getActivePlayer().game.getMissedAttacks()).toContainEqual([
      9, 9,
    ]);
  });
});

describe("Calculate Winner", () => {
  let gameplay = GameController("User", "User 2");
  let [play1, play2] = gameplay.getPlayers();
  SetupShip(play1, play2);
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

describe("test resetGame property", () => {
  let gameplay = GameController("Tom", "Eric");
  let [play1, play2] = gameplay.getPlayers();

  SetupShip(play1, play2);

  test("gameplay should have ships in board", () => {
    let play1Board = play1.game.getBoard();
    let play2Board = play2.game.getBoard();
    expect(play1Board[0][3].name).toBe("Carrier");
    expect(play2Board[5][7].name).toBe("Submarine");
  });

  test("gameplay should have hits and misses", () => {
    gameplay.playRound([5, 6]);
    gameplay.playRound([0, 2]);
    gameplay.playRound([4, 4]);
    gameplay.playRound([9, 9]);

    gameplay.restart();

    let play1Miss = play1.game.getMissedAttacks();
    let play1Hits = play1.game.getHitAttacks();

    let play1Board = play1.game.getBoard();
    let play2Board = play2.game.getBoard();

    expect(play1Miss.length).toBe(0);
    expect(play1Hits.length).toBe(0);

    expect(play1Board[0][3].name).not.toBe("Carrier");
    expect(play2Board[5][7].name).not.toBe("Submarine");
  });
});

describe("Restarting a game", () => {
  let gameplay = GameController("Tom", "John");

  let [play1, play2] = gameplay.getPlayers();

  SetupShip(play1, play2);

  //[0, 0], [0, 4] [5, 5], [5, 8] [4, 3], [4, 5][8, 7], [8, 9][2, 4], [2, 5] play1 ships

  gameplay.playRound([3, 2]);

  gameplay.restart();

  expect(gameplay.getActivePlayer().name).toBe("Tom");
});
