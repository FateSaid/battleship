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

function activateDialogBox() {
  const dialogBox = document.querySelector(".winner");
  dialogBox.showModal();
}

export {
  playerOneBoard,
  playerTwoBoard,
  resultOutput,
  toggleDisableBoard,
  activateDialogBox,
};
