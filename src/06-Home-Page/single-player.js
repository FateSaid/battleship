import { ScreenController } from "../05-ScreenController/screencontroller";
import { renderBoard, shipCoordinateBox } from "../05-ScreenController/dom";

export function singlePlayerInput() {
  const playerOption = document.querySelector(".player-option");
  playerOption.remove();
  const homePage = document.querySelector(".home-page-option");
  const singlePlayerForm = document.createElement("form");
  singlePlayerForm.classList.add("single-player-form");

  const playerOneDiv = document.createElement("div");
  playerOneDiv.classList.add("player-one-div");

  const playerOneLabel = document.createElement("label");
  playerOneLabel.textContent = "Player One Name";

  const playerOneInput = document.createElement("input");
  playerOneInput.setAttribute("placeholder", "Enter Name");

  const playerOneBtnDiv = document.createElement("div");
  const playerOneBtn = document.createElement("button");
  playerOneBtn.textContent = "Enter";
  playerOneBtnDiv.appendChild(playerOneBtn);

  playerOneDiv.appendChild(playerOneLabel);
  playerOneDiv.appendChild(playerOneInput);
  singlePlayerForm.appendChild(playerOneDiv);
  singlePlayerForm.appendChild(playerOneBtnDiv);

  homePage.appendChild(singlePlayerForm);

  singlePlayerEvent(playerOneInput, playerOneBtn, singlePlayerForm);
}

function singlePlayerEvent(input, btn, theForm) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    renderBoard(input.value, "Computer");
    shipCoordinateBox();
    ScreenController(input.value);
    theForm.remove();
  });
}
