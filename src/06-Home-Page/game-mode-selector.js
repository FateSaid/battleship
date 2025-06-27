import { ScreenController } from "../05-ScreenController/screencontroller";
import {
  renderBoard,
  shipCoordinateBox,
  shipCoordinateBtnBox,
} from "../05-ScreenController/dom";
import { getPlayerNameInput } from "../06-Home-Page/home-event";

export function gameModeSelection(num) {
  const playerOption = document.querySelector(".player-option");
  playerOption.remove();
  const homePage = document.querySelector(".home-page-option");
  const form = document.createElement("form");
  form.classList.add("player-form");

  createPlayerInput(num, form);

  const playerInputBtnDiv = document.createElement("div");
  const playerInputBtn = document.createElement("button");
  playerInputBtn.setAttribute("id", "player-name-btn");
  playerInputBtn.textContent = "Enter";
  playerInputBtnDiv.appendChild(playerInputBtn);

  form.appendChild(playerInputBtnDiv);

  homePage.appendChild(form);

  getPlayerNameInput(form, playerInputBtn);
}

function createPlayerInput(num, form) {
  const playerInputSelection = document.createElement("div");
  playerInputSelection.classList.add("player-input-selection");
  for (let i = 0; i < num; i++) {
    let playerDiv = document.createElement("div");
    if (i === 0) {
      playerDiv.classList.add("player-one-div");
    } else if (i === 1) {
      playerDiv.classList.add("player-two-div");
    }

    let playerLabel = document.createElement("label");
    let playerInput = document.createElement("input");
    if (i === 0) {
      playerLabel.setAttribute("for", "player-one-name");
      playerLabel.textContent = "Player One Name";

      playerInput.setAttribute("type", "text");
      playerInput.setAttribute("id", "player-one-name");
      playerInput.setAttribute("required", "");
    } else if (i === 1) {
      playerLabel.setAttribute("for", "player-two-name");
      playerLabel.textContent = "Player Two Name";
      playerInput.setAttribute("type", "text");
      playerInput.setAttribute("id", "player-two-name");
      playerInput.setAttribute("required", "");
    }
    playerInput.setAttribute("placeholder", "Enter Name");

    playerDiv.appendChild(playerLabel);
    playerDiv.appendChild(playerInput);

    playerInputSelection.appendChild(playerDiv);

    form.appendChild(playerInputSelection);
  }
}
