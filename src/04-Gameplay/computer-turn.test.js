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
    gameplay.playRound([9, 9]);
    let activeMissed = gameplay.getActivePlayer().game.missedAttacks;

    function checkDuplicate(array) {
      let stringArray = array.map(JSON.stringify);

      for (let i = 0; i < stringArray.length; i++) {
        if (stringArray.indexOf(stringArray[i]) !== i) {
          return false;
        }
      }
      return true;
    }

    expect(checkDuplicate(activeMissed)).toBeTruthy();
  });
});

describe("Testing Computer action", () => {
  let gameplay = GameController("User", "Computer");

  test("Computer should attack random coordinate", () => {
    gameplay.playRound([0, 0]);

    expect(gameplay.getActivePlayer().name).toBe("User");
  });
});
