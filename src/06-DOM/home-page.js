export function homePage() {
  const content = document.querySelector(".content");

  const homePageOption = document.createElement("div");
  homePageOption.classList.add("home-page-option");

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

  homePageOption.appendChild(playerOption);

  content.appendChild(homePageOption);
}
