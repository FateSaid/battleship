import { playerSelection } from "./gamemode-selection";

export function homePage() {
  const content = document.querySelector(".content");

  const playerOption = document.createElement("div");
  playerOption.classList.add("player-option");

  const playerOneOption = document.createElement("button");
  playerOneOption.classList.add("player-one-option");
  playerOneOption.textContent = "1 Player";

  const playerTwoOption = document.createElement("button");
  playerTwoOption.classList.add("player-two-option");
  playerTwoOption.textContent = "2 Players";

  playerOption.appendChild(playerOneOption);
  playerOption.appendChild(playerTwoOption);

  content.appendChild(playerOption);

  homeEvents(playerOneOption, playerTwoOption);

  restartHomePage();
}

function homeEvents(play1Btn, play2Btn) {
  play1Btn.addEventListener("click", () => {
    playerSelection(1);
  });

  play2Btn.addEventListener("click", () => {
    playerSelection(2);
  });
}

function restartHomePage() {
  const exitBtn = document.querySelector(".exit");

  exitBtn.addEventListener("click", () => {
    location.reload();
  });
}
