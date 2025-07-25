import { GameController } from "../04-Gameplay/gamecontroller";
import { initPlayerBoardShip } from "./random-ship-placement";
function ScreenController(play1, play2) {
  let gameplay = GameController(play1, play2);

  initRandomShipPlacementListener(gameplay);
}

function initRandomShipPlacementListener(gameplay) {
  const btn = document.getElementById("random-ship-btn");
  const activePlayer = gameplay.getActivePlayer();

  btn.addEventListener("click", () => {
    clearBoard(activePlayer);
    initPlayerBoardShip(gameplay);
    updateActiveUserBoard(gameplay);
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

function updateActiveUserBoard(gameplay) {
  const playerName = gameplay.getActivePlayer().name;

  const board = gameplay.getActivePlayer().game.getBoard();

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

      row.appendChild(cell);
    }
    dom.appendChild(row);
  }
}

export { ScreenController };
