import { homeEvents, restart } from "./home-event.js";

export function homePage() {
  const content = document.querySelector(".content");
  content.classList.add("home-page-option");
  content.textContent = "";

  const title = document.createElement("div");
  title.classList.add("title");
  title.textContent = "Battleship";

  const playerOption = document.createElement("div");
  playerOption.classList.add("player-option");

  const playerOne = document.createElement("button");
  playerOne.classList.add("player-one-option");
  playerOne.textContent = "One Player";

  const playerTwo = document.createElement("button");
  playerTwo.classList.add("player-two-option");
  playerTwo.textContent = "Two Players";

  playerOption.appendChild(playerOne);
  playerOption.appendChild(playerTwo);

  content.appendChild(title);
  content.appendChild(playerOption);

  homeEvents(playerOne);

  restart();
}
