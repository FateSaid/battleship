import { createPlayer } from "./create-player.js";
import { Computer } from "../03-Player/player.js";
import { SetupShip } from "./setup-ship.js";

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

    if (checkDuplicate(missedArray, coordinates)) {
      opponent.game.receiveAttack([x, y]);
    }

    if (checkWinner(opponent)) {
      return `Winner is ${getActivePlayer().name}`;
    } else {
      switchPlayer();
    }

    if (getActivePlayer().name === "Computer") {
      let missedArray = getActivePlayer().game.missedAttacks;
      let [a, b] = randomCoordinates(missedArray);
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

function checkDuplicate(array, coordinate) {
  let stringArray = array.map(JSON.stringify);
  let stringCoordinate = JSON.stringify(coordinate);

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === stringCoordinate) {
      return false;
    }
  }
  return true;
}

function randomCoordinates(missedArray) {
  let x = Math.floor(Math.random() * 10);

  let y = Math.floor(Math.random() * 10);

  if (checkDuplicate(missedArray, [x, y])) {
    return [x, y];
  } else {
    randomCoordinates(missedArray);
  }
}
