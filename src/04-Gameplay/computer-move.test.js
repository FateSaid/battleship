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
    gameplay.playRound([6, 0]);

    let potentialCoordinates = potentialMove(gameplay.getOpponent());

    expect([
      [4, 0],
      [7, 0],
    ]).toContainEqual(potentialCoordinates);
  });

  test("Should filter if adjacent hits are same ship", () => {
    let gameplay = GameController("Sam", "Hill");
    let [play1, play2] = gameplay.getPlayers();
    SetupShip(play1, play2);

    gameplay.playRound([0, 4]);

    gameplay.playRound([5, 7]);

    gameplay.playRound([0, 5]);

    expect(JSON.stringify(filterSameShipHit(gameplay.getOpponent()))).toEqual(
      JSON.stringify([
        [0, 4],
        [0, 5],
      ])
    );

    gameplay.playRound([9, 9]);

    gameplay.playRound([0, 0]);

    gameplay.playRound([0, 1]);

    let hillCoord = filterSameShipHit(gameplay.getOpponent());

    expect(hillCoord).toEqual([
      [0, 0],
      [0, 1],
    ]);
  });

  test("Should hit adjacent space when there is a direct hit", () => {
    let gameplay = GameController("User", "Chance");
    let [play1, play2] = gameplay.getPlayers();
    SetupShip(play1, play2);

    //player 1 hitAttacks [4,5],[4,4] // missAttacks [4,6],[4,7]

    gameplay.playRound([0, 0]);
    gameplay.playRound([4, 5]);

    gameplay.playRound([4, 6]);
    gameplay.playRound([6, 3]);

    gameplay.playRound([4, 4]);

    let calculateResult = calculateNextTarget(gameplay.getOpponent());

    expect(calculateResult).toEqual([4, 3]);
  });

  test("Identify if ship is horizontal or vertical", () => {
    let gameplay = GameController("Tom", "Mafeel");
    let [play1, play2] = gameplay.getPlayers();
    SetupShip(play1, play2);

    gameplay.playRound([5, 7]);

    gameplay.playRound([6, 7]);

    gameplay.playRound([9, 9]);

    expect(
      getShipOrientation(gameplay.getActivePlayer().game.getHitAttacks())
    ).toBe("Vertical");

    gameplay.playRound([5, 5]);
    gameplay.playRound([5, 6]);

    expect(
      getShipOrientation(gameplay.getOpponent().game.getHitAttacks())
    ).toBe("Horizontal");
  });

  test("predictShipLocation should return ship coordinate", () => {
    let gameplay = GameController("Sam", "Hill");
    let [play1, play2] = gameplay.getPlayers();
    SetupShip(play1, play2);

    gameplay.playRound([6, 0]);

    gameplay.playRound([7, 0]);

    expect([
      [5, 0],
      [8, 0],
    ]).toContainEqual(predictShipLocation(gameplay.getOpponent()));
  });
});

describe("Battleship active player", () => {
  const gameplay = GameController("User", "testCom");
  let [play1, play2] = gameplay.getPlayers();
  SetupShip(play1, play2);

  test("should still be User if computer ship is hit", () => {
    gameplay.playRound([5, 0]);

    expect(gameplay.getActivePlayer().name).toBe("User");
  });
});
