import { GameController } from "../04-Gameplay/gamecontroller";
import { initPlayerBoardShip } from "./random-ship-placement";
import { outputMessage, updateActiveUserBoard } from "../06-DOM/game-screen";
function ScreenController(play1, play2) {
  let gameplay = GameController(play1, play2);

  outputMessage(`${gameplay.getActivePlayer().name}'s turn!`);

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
    updateActiveUserBoard(opponent, gameplay);
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

function initCellEvent(cell, gameplay, i, j) {
  cell.addEventListener("click", () => {
    gameplay.playRound([i, j]);
  });
}

export { ScreenController, initCellEvent, getActivePlayerDom };
