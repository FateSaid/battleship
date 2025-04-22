import {
  randomCoordinates,
  checkHitAttacks,
  checkDuplicate,
} from "./computer-move.js";
import { GameController } from "./gamecontroller.js";

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
    round.playRound([0, 9]);

    expect(checkHitAttacks(round.getActivePlayer())).toContainEqual([0, 9]);

    round.playRound([3, 6]);
    round.playRound([1, 9]);

    expect(checkHitAttacks(round.getActivePlayer())).toEqual([]);
  });

  test("Should hit adjacent space when there is a direct hit", () => {
    let gameplay = GameController("User", "Chance");

    //player 1 hitAttacks [5,5],[4,5] // missAttacks [4,6],[3,5]

    gameplay.playRound([0, 0]);
    gameplay.playRound([4, 5]);
    gameplay.playRound([5, 3]);
    gameplay.playRound([4, 6]);
    gameplay.playRound([6, 3]);
    gameplay.playRound([8, 9]);
    gameplay.playRound([3, 5]);
    gameplay.playRound([4, 7]);
    gameplay.playRound([5, 5]);

    let firstPlayer = gameplay.getOpponent();

    expect(calculateNextTarget(firstPlayer)).toEqual([4, 4]);
  });
});
