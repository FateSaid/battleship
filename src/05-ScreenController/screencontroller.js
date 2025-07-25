import { GameController } from "../04-Gameplay/gamecontroller";
import { initPlayerBoardShip } from "./random-ship-placement";
function ScreenController(play1, play2) {
  let gameplay = GameController(play1, play2);

  initRandomShipPlacementListener(gameplay);
  initStartGameListener(gameplay);
}

function initRandomShipPlacementListener(gameplay) {
  const btn = document.getElementById("random-ship-btn");
  const activePlayer = gameplay.getActivePlayer();

  btn.addEventListener("click", () => {
    clearBoard(activePlayer);
    initPlayerBoardShip(activePlayer);
    updateActiveUserBoard(activePlayer);
  });
}

function initStartGameListener(gameplay) {
  const startBtn = document.getElementById("start-btn");
  const opponent = gameplay.getOpponent();

  startBtn.addEventListener("click", () => {
    initPlayerBoardShip(opponent);
    updateActiveUserBoard(opponent);
  });
}

function clearBoard(player) {
  let dom = getActivePlayerDom(player.name);
  dom.textContent = "";
}

function getActivePlayerDom(player) {
  const allTitleBoard = document.querySelectorAll(".player-title");

  for (let i = 0; i < allTitleBoard.length; i++) {
    if (allTitleBoard[i].textContent === player) {
      return allTitleBoard[i].nextElementSibling;
    }
  }
}

function updateActiveUserBoard(user) {
  const playerName = user.name;

  const board = user.game.getBoard();

  const userDom = getActivePlayerDom(playerName);

  renderBoardFromArray(userDom, board);
}

function renderBoardFromArray(dom, board) {
  for (let i = 0; i < board.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < board[i].length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      if (!Array.isArray(board[i][j])) {
        cell.classList.add("ship");
      }

      cell.addEventListener("click", () => {
        console.log(i, j);
      });

      row.appendChild(cell);
    }
    dom.appendChild(row);
  }
}

export { ScreenController };
