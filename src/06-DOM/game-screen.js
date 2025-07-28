function createGameBoard(player1, player2) {
  if (typeof player2 === undefined) {
    player2 = "Computer";
  }

  const content = document.querySelector(".content");

  const playerArray = ["one", "two"];

  const board = document.createElement("div");
  board.classList.add("board");

  const shipInputDiv = document.createElement("div");
  shipInputDiv.classList.add("ship-input-div");

  for (let i = 0; i < playerArray.length; i++) {
    const playerDiv = document.createElement("div");
    playerDiv.classList.add(`player-${playerArray[i]}`);

    const playerTitle = document.createElement("div");
    playerTitle.classList.add("player-title");
    playerTitle.setAttribute("Id", `player-${playerArray[i]}`);

    if (i === 0) {
      playerTitle.textContent = player1;
    } else {
      playerTitle.textContent = player2;
    }

    const playerBoard = document.createElement("div");
    playerBoard.classList.add("player-board");
    playerBoard.setAttribute("id", `player-${playerArray[i]}-board`);

    playerDiv.appendChild(playerTitle);
    playerDiv.appendChild(playerBoard);
    board.appendChild(playerDiv);
  }

  content.appendChild(board);

  const boardLastElement = board.lastElementChild;

  board.insertBefore(shipInputDiv, boardLastElement);

  createShipInputDiv();

  createStartDiv();

  createMessageOutput();
}

function createShipInputDiv() {
  const shipInputDiv = document.querySelector(".ship-input-div");

  const randomShipDiv = document.createElement("div");
  randomShipDiv.classList.add("ship-input-random");

  const randomShipTitle = document.createElement("div");
  randomShipTitle.textContent = "Generate random ship coordinates";

  const randomShipBtn = document.createElement("button");
  randomShipBtn.setAttribute("id", "random-ship-btn");
  randomShipBtn.textContent = "Click";

  randomShipDiv.appendChild(randomShipTitle);
  randomShipDiv.appendChild(randomShipBtn);

  shipInputDiv.appendChild(randomShipDiv);
}

function createStartDiv() {
  const shipInputDiv = document.querySelector(".ship-input-div");

  const startDiv = document.createElement("div");
  startDiv.classList.add("start-div");

  const startTitle = document.createElement("div");
  startTitle.classList.add("start-title");
  startTitle.textContent = "Start Game";

  const startBtn = document.createElement("button");
  startBtn.setAttribute("id", "start-btn");
  startBtn.classList.add("disable");
  startBtn.textContent = "Click";

  startDiv.appendChild(startTitle);
  startDiv.appendChild(startBtn);

  shipInputDiv.appendChild(startDiv);
}

function togglesDisable(div) {
  if (div.classList.contains("disable")) {
    div.classList.remove("disable");
  } else {
    div.classList.add("disable");
  }
}

function createMessageOutput() {
  const shipInputDiv = document.querySelector(".ship-input-div");

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message-div");

  shipInputDiv.appendChild(messageDiv);
}

function outputMessage(char) {
  const messageDiv = document.querySelector(".message-div");
  messageDiv.textContent = char;
}

function disableBoardEvent() {
  const board = document.querySelectorAll(".player-board");

  board.forEach((el) => {
    el.classList.add("disable");
  });
}

function toggleStartBtn() {
  const btnTitle = document.querySelector(".start-title");
  if (btnTitle.textContent === "Start Game") {
    btnTitle.textContent = "Restart Game";
  } else {
    btnTitle.textContent = "Start Game";
  }
}

export {
  createGameBoard,
  outputMessage,
  disableBoardEvent,
  toggleStartBtn,
  togglesDisable,
};
