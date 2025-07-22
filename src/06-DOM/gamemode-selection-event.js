import { createGameBoard } from "./game-screen";
import { removePlayerSelection } from "./gamemode-selection";
import { gameplayEvents } from "./gameplay-event";
export function gameModeEvent(btn) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let players = getPlayerInput();
    createGameBoard(players[0], players[1]);
    removePlayerSelection();

    gameplayEvents(players);
  });
}

function getPlayerInput() {
  const inputs = document.querySelectorAll("input");

  let players = [];

  inputs.forEach((input) => {
    if (input.value !== "") {
      players.push(input.value);
    }
  });

  if (players.length === 1) {
    players.push("Computer");
  }

  return players;
}
