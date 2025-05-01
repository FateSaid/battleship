import { createPlayer } from "./create-player.js";
import { Computer } from "../03-Player/player.js";
import { SetupShip } from "./setup-ship.js";
import { calculateNextTarget, checkDuplicate } from "./computer-move.js";

export function GameController(player1, player2) {
  let players;

  if (player2 === "Computer" || player2 === undefined) {
    players = [createPlayer(player1), Computer()];
  } else {
    players = [createPlayer(player1), createPlayer(player2)];
  }

  let activePlayer = players[0];

  const getActivePlayer = () => activePlayer;

  function getPlayers() {
    return players;
  }

  function switchPlayer() {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  }

  function getOpponent() {
    let opponent = activePlayer === players[0] ? players[1] : players[0];
    return opponent;
  }

  function playRound(coordinates) {
    let [x, y] = coordinates;

    let opponent = getOpponent();

    let missedArray = opponent.game.missedAttacks;
    let hitArray = opponent.game.hitAttacks;

    let combinedArray = missedArray.concat(hitArray);

    if (checkDuplicate(combinedArray, coordinates)) {
      opponent.game.receiveAttack([x, y]);
    } else {
      throw new Error("Duplicate");
    }

    if (checkWinner(opponent)) {
      return `Winner is ${getActivePlayer().name}`;
    } else {
      switchPlayer();
    }

    if (getActivePlayer().name === "Computer") {
      let [a, b] = calculateNextTarget(getOpponent());
      playRound([a, b]);
    }
  }

  function checkWinner(opponent) {
    return opponent.game.totalShipSunk();
  }

  SetupShip(players[0], players[1]);

  return {
    getActivePlayer,
    getOpponent,
    playRound,
    getPlayers,
  };
}
