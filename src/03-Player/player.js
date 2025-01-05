import { Gameboard } from "../02-Gameboard/gameboard.js";

export function Player(name) {
  const game = Gameboard();

  return {
    name,
    game,
  };
}
