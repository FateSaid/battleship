import { Player } from "../03-Player/player.js";

export function createPlayer(name) {
  let player = new Player(name);
  return player;
}
