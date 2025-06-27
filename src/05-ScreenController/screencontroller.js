import { GameController } from "../04-Gameplay/gamecontroller.js";
import { playerOneBoard, playerTwoBoard, resultOutput } from "./dom.js";

function ScreenController(gameplay) {
  // let gameplay;
  // if (typeof player1 != undefined && typeof player2 != undefined) {
  //   gameplay = GameController(player1, player2);
  // } else if (typeof player2 === undefined && typeof player1 != undefined) {
  //   gameplay = GameController(player1);
  // } else {
  //   throw new Error("players are undefined");
  // }

  playerTurn(`${gameplay.getActivePlayer().name}'s turn`);
  updateScreen(gameplay);
}

function updateScreen(gameplay) {
  clearBoard();

  const players = gameplay.getPlayers();

  createDivCell(playerOneBoard, players[0], gameplay, "player 1");
  createDivCell(playerTwoBoard, players[1], gameplay, "computer");
}

function playerTurn(player) {
  resultOutput(player);
}

function createDivCell(domBoard, player, gameplay, status) {
  let board = player.game.getBoard();
  let arrayAttacks = player.game.hitAttacks;
  for (let i = 0; i < board.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < board[i].length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      //show ship location on board
      if (status !== "computer") {
        if (!Array.isArray(board[i][j])) {
          cell.classList.add("ship");
        }
      }

      //show damaged ship
      arrayAttacks.forEach((item) => {
        let [a, b] = item;
        if (i === a && b === j) {
          cell.classList.add("damage");
        }
      });

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

function displayBoard(domBoard, gameplay) {
  let board = gameplay.getActivePlayer().game.getBoard();

  for (let i = 0; i < board.length; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < board[i].length; j++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      //show ship location on board

      if (!Array.isArray(board[i][j])) {
        cell.classList.add("ship");
      }

      row.appendChild(cell);
      eventHandler(i, j, gameplay, cell);
    }
    domBoard(row);
  }

  console.log(board);
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
    if (typeof gameplay.playRound([x, y]) === "string") {
      resultOutput(`Winner is ${gameplay.getActivePlayer().name}!`);
    } else {
      playerTurn(`${gameplay.getActivePlayer().name}'s turn`);
    }
    updateScreen(gameplay);
  });
}

function clearBoard() {
  const playerBoard = document.querySelectorAll(".player-board");

  playerBoard.forEach((board) => {
    board.textContent = "";
  });
}

export { ScreenController, displayBoard };
