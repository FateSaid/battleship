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

  const xLabel = document.createElement("label");
  xLabel.setAttribute("for", `coordinate-x-${ship}`);
  xLabel.textContent = "X";
  const xInput = document.createElement("input");
  xInput.setAttribute("type", "number");
  xInput.setAttribute("id", `coordinate-x-${ship}`);
  xInput.setAttribute("min", 0);
  xInput.setAttribute("max", 9);

  const yLabel = document.createElement("label");
  yLabel.setAttribute("for", `coordinate-y-${ship}`);
  yLabel.textContent = "Y";
  const yInput = document.createElement("input");
  yInput.setAttribute("type", "number");
  yInput.setAttribute("id", `coordinate-y-${ship}`);
  yInput.setAttribute("min", 0);
  yInput.setAttribute("max", 9);

  const btn = document.createElement("button");
  btn.classList.add("input-coordinate-button");
  btn.setAttribute("id", `${ship.toLowerCase().replace(" ", "-")}-btn`);
  btn.textContent = "Submit";

  divInput.appendChild(xLabel);
  divInput.appendChild(xInput);
  divInput.appendChild(yLabel);
  divInput.appendChild(yInput);
  divInput.appendChild(btn);

  divCoordinate.appendChild(divTitle);
  divCoordinate.appendChild(divInput);

  coordinateBox.appendChild(divCoordinate);
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
};
