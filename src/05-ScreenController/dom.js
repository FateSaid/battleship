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

export {
  playerOneBoard,
  playerTwoBoard,
  resultOutput,
  toggleDisableBoard,
  playerOne,
  playerTwo,
  renderBoard,
};
