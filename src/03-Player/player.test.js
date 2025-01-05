import { Player } from "./player.js";

describe("creating Player class", () => {
  const user = Player("User");
  const computer = Player("Computer");

  it("Expect User to be defined", () => {
    expect(user).toBeDefined();
  });

  it("Expect players to have own gameboard", () => {
    user.game.placeShip("Patrol", 2, [0, 0], [1, 0]);
    computer.game.placeShip("Submarine", 3, [8, 4], [8, 6]);

    expect(user.game.getBoard()).not.toStrictEqual(computer.game.getBoard());
  });
});
