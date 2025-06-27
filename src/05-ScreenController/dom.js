function playerOne(playerName) {
  const playerOneDiv = document.querySelector(".player-one");

  const playerTitle = document.createElement("div");
  playerTitle.classList.add("player-title");
  playerTitle.setAttribute("id", "first-player");
  playerTitle.textContent = `${playerName}`;

  const playerBoard = document.createElement("div");
  playerBoard.classList.add("player-board");
  playerBoard.setAttribute("id", "first-player-board");

  playerOneDiv.appendChild(playerTitle);
  playerOneDiv.appendChild(playerBoard);
}

function playerTwo(playerName) {
  const playerTwoDiv = document.querySelector(".player-two");

  const playerTitle = document.createElement("div");
  playerTitle.classList.add("player-title");
  playerTitle.setAttribute("id", "second-player");
  playerTitle.textContent = `${playerName}`;

  const playerBoard = document.createElement("div");
  playerBoard.classList.add("player-board");
  playerBoard.setAttribute("id", "second-player-board");

  playerTwoDiv.appendChild(playerTitle);
  playerTwoDiv.appendChild(playerBoard);
}

function playerOneBoard(div) {
  const playerBoard = document.getElementById("first-player-board");
  playerBoard.appendChild(div);
}

function playerTwoBoard(div) {
  const playerBoard = document.getElementById("second-player-board");
  playerBoard.appendChild(div);
}

function resultOutput(text) {
  const dialogMessage = document.querySelector(".winnerMessage");
  dialogMessage.textContent = text;
}

function toggleDisableBoard() {
  const playerBoard = document.querySelectorAll(".player-board");

  let activeBoard = playerBoard[0];

  function switchBoard() {
    activeBoard =
      activeBoard === playerBoard[0] ? playerBoard[1] : playerBoard[0];
    switchDisable(getActiveBoard(), getOpponentBoard());
  }

  const getActiveBoard = () => activeBoard;

  function getOpponentBoard() {
    let opponent =
      activeBoard === playerBoard[0] ? playerBoard[1] : playerBoard[0];
    return opponent;
  }
  function switchDisable(player, opponent) {
    disableBoard(player, opponent);
  }

  switchDisable(getActiveBoard(), getOpponentBoard());

  return {
    switchBoard,
  };
}

function disableBoard(player, opponent) {
  player.classList.add("disable");
  opponent.classList.remove("disable");
}

function renderBoard(playerOneName, playerTwoName) {
  const content = document.querySelector(".content");

  const board = document.createElement("div");
  board.classList.add("board");

  const singlePlayerOne = document.createElement("div");
  singlePlayerOne.classList.add("player-one");

  const singlePlayerTwo = document.createElement("div");
  singlePlayerTwo.classList.add("player-two");

  const result = document.createElement("div");
  result.classList.add("winnerMessage");

  board.appendChild(singlePlayerOne);
  board.appendChild(singlePlayerTwo);

  content.appendChild(board);
  content.appendChild(result);

  playerOne(playerOneName);
  playerTwo(playerTwoName);
}

function shipCoordinateBox() {
  const board = document.querySelector(".board");
  const playerOneBoard = document.querySelector(".player-one");

  const coordinateBox = document.createElement("div");
  coordinateBox.setAttribute("id", "coordinate-box");

  board.insertBefore(coordinateBox, playerOneBoard);

  getShipCoordinate("Carrier");
  getShipCoordinate("BattleShip");
  getShipCoordinate("Destroyer");
  getShipCoordinate("Submarine");
  getShipCoordinate("Patrol Boat");
}

function getShipCoordinate(ship) {
  const coordinateBox = document.getElementById("coordinate-box");

  const divCoordinate = document.createElement("div");
  divCoordinate.classList.add("ship-input-coordinate");

  const divTitle = document.createElement("div");
  divTitle.classList.add("ship-title");
  divTitle.textContent = `${ship}`;

  const divInput = document.createElement("div");
  divInput.classList.add("input-box");

  const inputCoordinate = document.createElement("div");
  inputCoordinate.classList.add("coordinate-input");

  generateInput(inputCoordinate, "start", ship, "x");
  generateInput(inputCoordinate, "start", ship, "y");
  generateInput(inputCoordinate, "end", ship, "x");
  generateInput(inputCoordinate, "end", ship, "y");

  const btn = document.createElement("button");
  btn.classList.add("input-coordinate-button");
  btn.setAttribute("id", `${ship.toLowerCase().replace(" ", "-")}-btn`);
  btn.textContent = "Submit";

  divInput.appendChild(inputCoordinate);
  divInput.appendChild(inputCoordinate);
  divInput.appendChild(btn);

  divCoordinate.appendChild(divTitle);
  divCoordinate.appendChild(divInput);

  coordinateBox.appendChild(divCoordinate);
}

function generateInput(div, status, ship, axis) {
  const inputDiv = document.createElement("div");
  inputDiv.classList.add(`input-box-${status}-${axis}`);
  inputDiv.classList.add("input-item");

  const label = document.createElement("label");
  label.setAttribute(
    "for",
    `${status}-${axis}-${ship.toLowerCase().replace(" ", "-")}`
  );
  label.textContent = `${status} ${axis.toUpperCase()}`;

  const input = document.createElement("input");
  input.setAttribute(
    "id",
    `${status}-${axis}-${ship.toLowerCase().replace(" ", "-")}`
  );
  input.setAttribute("type", "number");
  input.setAttribute("min", 0);
  input.setAttribute("max", 9);

  inputDiv.appendChild(label);
  inputDiv.appendChild(input);

  div.appendChild(inputDiv);
}

function getPlayerDomBoard(gameplay) {
  let player = gameplay.getActivePlayer().name;

  const playerTitles = document.querySelectorAll(".player-title");

  for (let i = 0; i < playerTitles.length; i++) {
    if (playerTitles[i].textContent === player) {
      return playerTitles[i].parentElement.lastElementChild;
    }
  }

  throw new Error("Player board not found in getPlayerDomBoard");
}

export {
  playerOneBoard,
  playerTwoBoard,
  resultOutput,
  toggleDisableBoard,
  playerOne,
  playerTwo,
  renderBoard,
  shipCoordinateBox,
  getPlayerDomBoard,
};
