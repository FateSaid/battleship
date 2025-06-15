import { singlePlayerInput } from "./single-player.js";

function homeEvents(playerOneButton) {
  playerOneButton.addEventListener("click", () => {
    singlePlayerInput();
  });
}

function restart() {
  const restartBtn = document.querySelector(".restart");

  restartBtn.addEventListener("click", () => {
    location.reload();
  });
}

export { homeEvents, restart };
