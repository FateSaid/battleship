import { singlePlayerInput } from "./single-player.js";

export function homeEvents(playerOneButton) {
  console.log(playerOneButton);
  playerOneButton.addEventListener("click", () => {
    singlePlayerInput();
  });
}
