import { createPlayer } from "./create-player.js";
import { SetupShip } from "./setup-ship.js";

export function GameController(player1, player2) {
  let players = [createPlayer(player1), createPlayer(player2)];

  let activePlayer = players[0];

  const getActivePlayer = () => activePlayer;

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

    opponent.game.receiveAttack([x, y]);

    if (checkWinner(opponent)) {
      return `Winner is ${getActivePlayer().name}`;
    }

    switchPlayer();
  }

  function checkWinner(opponent) {
    return opponent.game.totalShipSunk();
  }

  SetupShip(players[0], players[1]);

  return {
    getActivePlayer,
    getOpponent,
    playRound,
  };
}
