import { ScreenController } from "../05-ScreenController/screencontroller";

function playerSelection(multi) {
  const content = document.querySelector(".content");

  const playerOption = document.querySelector(".player-option");
  playerOption.remove();

  const playerForm = document.createElement("form");
  playerForm.classList.add("player-form");

  const playerInputSelection = document.createElement("div");
  playerInputSelection.classList.add("player-input-selection");

  for (let i = 1; i <= multi; i++) {
    const playerOneDiv = document.createElement("div");

    const playerOneLabel = document.createElement("label");

    const playerOneInput = document.createElement("input");
    playerOneInput.setAttribute("type", "text");

    if (i === 1) {
      playerOneDiv.classList.add("player-one-div");
      playerOneLabel.setAttribute("for", "player-one-name");
      playerOneLabel.textContent = `Player One Name`;
      playerOneInput.setAttribute("id", `player-one-name`);
    } else {
      playerOneDiv.classList.add("player-two-div");
      playerOneLabel.setAttribute("for", "player-two-name");
      playerOneLabel.textContent = `Player Two Name`;
      playerOneInput.setAttribute("id", `player-two-name`);
    }

    playerOneDiv.appendChild(playerOneLabel);

    playerOneInput.setAttribute("placeholder", "Enter Name");
    playerOneDiv.appendChild(playerOneInput);

    playerInputSelection.appendChild(playerOneDiv);
  }

  const btnDiv = document.createElement("div");
  const btn = document.createElement("button");
  btn.textContent = "Enter";
  btn.setAttribute("id", "player-name-btn");
  btnDiv.appendChild(btn);

  playerForm.appendChild(playerInputSelection);
  playerForm.appendChild(btnDiv);

  content.appendChild(playerForm);

  gameModeEvent(btn);
}

function gameModeEvent(btn) {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    let players = getPlayerInput();
    removePlayerSelection();

    ScreenController(players[0], players[1]);
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

function removePlayerSelection() {
  const playerForm = document.querySelector(".player-form");
  playerForm.remove();
}

export { playerSelection, removePlayerSelection };
