import { Gameboard } from "../02-Gameboard/gameboard.js";

function Player(name) {
  const game = Gameboard();

  return {
    name,
    game,
  };
}

function Computer() {
  const name = "Computer";
  const game = Gameboard();

  return {
    name,
    game,
  };
}

export { Player, Computer };
