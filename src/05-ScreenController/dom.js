function playerOneBoard(div) {
  const playerBoard = document.getElementById("first-player-board");
  playerBoard.appendChild(div);
}

function playerTwoBoard(div) {
  const playerBoard = document.getElementById("second-player-board");
  playerBoard.appendChild(div);
}

function resultOutput(text) {
  const result = document.querySelector(".result");
  result.textContent = text;
}

export { playerOneBoard, playerTwoBoard, resultOutput };
