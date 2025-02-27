import {
  generateComputerMove,
  randomCoordinate,
  checkDuplicate,
} from "./computer-move.js";

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

    let [x, y] = randomCoordinate(totalArray);
    expect([x, y]).toEqual([9, 9]);
  });
});
