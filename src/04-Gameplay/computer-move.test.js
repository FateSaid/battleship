import {
  randomCoordinates,
  checkHitAttacks,
  checkDuplicate,
  potentialMove,
  filterSameShipHit,
  getShipOrientation,
  predictShipLocation,
  calculateNextTarget,
} from "./computer-move.js";
import { GameController } from "./gamecontroller.js";
import { SetupShip } from "./setup-ship.js";

describe("Generate computer coordinates", () => {
  test("Should return false if checkDuplicate has no duplicate", () => {
    expect(
      checkDuplicate(
        [
          [1, 2],
          [1, 1],
        ],
        [1, 3]
      )
    ).toBeTruthy();

    expect(
      checkDuplicate(
        [
          [1, 2],
          [1, 3],
        ],
        [1, 3]
      )
    ).toBeFalsy();
  });

  test("Should generate random coordinate that is not duplicate", () => {
    function generateTotalArray() {
      let array = [];
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          array.push([i, j]);
        }
      }
      return array;
    }
    let totalArray = generateTotalArray();

    totalArray.pop();

    expect(randomCoordinates(totalArray)).toEqual([9, 9]);
  });

  test("Should check hitAttack array for unsunk ships", () => {
    let round = GameController("Sam", "Cowell");
    let [play1, play2] = round.getPlayers();
    SetupShip(play1, play2);

    expect(checkHitAttacks(round.getActivePlayer())).toEqual([]);

    round.playRound([0, 9]);
    round.playRound([3, 6]);
    round.playRound([1, 9]);

    expect(checkHitAttacks(round.getActivePlayer())).toEqual([]);
  });

  test("CalculateNextTarget function should return first computer move", () => {
    let gameplay = GameController("Sam", "Collins");
    let [play1, play2] = gameplay.getPlayers();
    SetupShip(play1, play2);

    expect(calculateNextTarget(gameplay.getActivePlayer())).toBeDefined();

    gameplay.playRound([0, 9]);
    gameplay.playRound([2, 4]);
    gameplay.playRound([1, 9]);

    expect(calculateNextTarget(gameplay.getOpponent())).toBeDefined();
  });
});

describe("Calculate Next Target", () => {
  test("Computer potential move", () => {
    //Artest [[3,6],[3,7],[3,8]]
    //Ron [[4,5],[6,6]]
    let gameplay = GameController("Ron", "Artest");
    let [play1, play2] = gameplay.getPlayers();
    SetupShip(play1, play2);

    gameplay.playRound([5, 0]);
    gameplay.playRound([4, 5]);
    gameplay.playRound([6, 0]);

    expect([
      [4, 0],
      [7, 0],
    ]).toContainEqual(potentialMove(gameplay.getActivePlayer()));
  });

  test("Should filter if adjacent hits are same ship", () => {
    let gameplay = GameController("Sam", "Hill");
    let [play1, play2] = gameplay.getPlayers();
    SetupShip(play1, play2);

    gameplay.playRound([0, 4]);
    gameplay.playRound([0, 0]);
    gameplay.playRound([5, 7]);
    gameplay.playRound([5, 5]);
    gameplay.playRound([0, 5]);

    expect(filterSameShipHit(gameplay.getActivePlayer())).toEqual([
      [0, 4],
      [0, 5],
    ]);

    gameplay.playRound([0, 1]);

    expect(filterSameShipHit(gameplay.getActivePlayer())).toEqual([
      [0, 0],
      [0, 1],
    ]);
  });

  test("Should hit adjacent space when there is a direct hit", () => {
    let gameplay = GameController("User", "Chance");
    let [play1, play2] = gameplay.getPlayers();
    SetupShip(play1, play2);

    //player 1 hitAttacks [4,5],[8,9],[4,4] // missAttacks [4,6],[4,7]

    gameplay.playRound([0, 0]);
    gameplay.playRound([4, 5]);
    gameplay.playRound([5, 3]);
    gameplay.playRound([4, 6]);
    gameplay.playRound([6, 3]);
    gameplay.playRound([8, 9]);
    gameplay.playRound([3, 5]);
    gameplay.playRound([4, 4]);
    gameplay.playRound([5, 5]);

    expect(calculateNextTarget(gameplay.getOpponent())).toEqual([4, 3]);
  });

  test("Identify if ship is horizontal or vertical", () => {
    let gameplay = GameController("Tom", "Mafeel");
    let [play1, play2] = gameplay.getPlayers();
    SetupShip(play1, play2);

    gameplay.playRound([5, 7]);
    gameplay.playRound([5, 5]);
    gameplay.playRound([6, 7]);

    expect(
      getShipOrientation(gameplay.getActivePlayer().game.getHitAttacks())
    ).toBe("Vertical");

    gameplay.playRound([5, 6]);

    expect(
      getShipOrientation(gameplay.getActivePlayer().game.getHitAttacks())
    ).toBe("Horizontal");
  });

  test("predictShipLocation should return ship coordinate", () => {
    let gameplay = GameController("Sam", "Hill");
    let [play1, play2] = gameplay.getPlayers();
    SetupShip(play1, play2);

    gameplay.playRound([6, 0]);
    gameplay.playRound([0, 2]);
    gameplay.playRound([7, 0]);

    expect([
      [5, 0],
      [8, 0],
    ]).toContainEqual(predictShipLocation(gameplay.getActivePlayer()));
  });
});
