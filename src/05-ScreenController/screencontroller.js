import { GameController } from "../04-Gameplay/gamecontroller.js";
import { playerOneBoard, playerTwoBoard, resultOutput } from "./dom.js";

export function ScreenController(player1, player2) {
  const gameplay = GameController(player1, player2);

  updateScreen(gameplay);
}

function updateScreen(gameplay) {
  clearBoard();

  const players = gameplay.getPlayers();

  playerTurn(`${gameplay.getActivePlayer().name}'s turn`);

  createDivCell(playerOneBoard, players[0], gameplay);
  createDivCell(playerTwoBoard, players[1], gameplay);
}

function playerTurn(player) {
  resultOutput(player);
}

function createDivCell(domBoard, player, gameplay) {
  let board = player.game.getBoard();
  for (let i = 0; i < board.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < board[i].length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      //show ship location on board
      if (board[i][j].length === 2) {
        cell.classList.add("ship");
      }
      //show damaged ship
      if (board[i][j][1] === 1) {
        cell.classList.add("damage");
      }

      //show missed
      if (displayMissedAttacks(player, i, j)) {
        cell.classList.add("missed");
      }
      row.appendChild(cell);
      eventHandler(i, j, gameplay, cell);
    }
    domBoard(row);
  }
}

function displayMissedAttacks(player, x, y) {
  let missed = player.game.missedAttacks;
  for (let i = 0; i < missed.length; i++) {
    let [a, b] = missed[i];
    if (a === x && b === y) {
      return true;
    }
  }

  return false;
}

function eventHandler(x, y, gameplay, cell) {
  cell.addEventListener("click", () => {
    gameplay.playRound([x, y]);
    updateScreen(gameplay);
  });
}

function clearBoard() {
  const playerBoard = document.querySelectorAll(".player-board");

  playerBoard.forEach((board) => {
    board.textContent = "";
  });
}
