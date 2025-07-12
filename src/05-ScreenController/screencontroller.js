import {
  playerOneBoard,
  playerTwoBoard,
  resultOutput,
  getPlayerDomBoard,
  createShipButtonDiv,
  disableEventBoard,
  enableEventBoard,
  removeShipButtonDiv,
} from "./dom.js";
import { randomShipPlacement } from "./random-ship-placement.js";

function ScreenController(gameplay) {
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
  let arrayAttacks = player.game.getHitAttacks();
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
  clearPlayerBoard(gameplay);
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
    domBoard.appendChild(row);
  }
}

function displayMissedAttacks(player, x, y) {
  let missed = player.game.getMissedAttacks();
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
      disableEventBoard();
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

function clearPlayerBoard(gameplay) {
  let board = getPlayerDomBoard(gameplay);

  board.textContent = "";
}

function computerShipPlacement(gameplay) {
  let computer = gameplay.getOpponent();

  let board = computer.game.getBoard();

  let carrierCoordinate = randomShipPlacement(4, board);

  computer.game.placeShip(
    "carrier",
    5,
    carrierCoordinate[0],
    carrierCoordinate[1]
  );

  let battleshipCoordinate = randomShipPlacement(3, board);

  computer.game.placeShip(
    "battleship",
    4,
    battleshipCoordinate[0],
    battleshipCoordinate[1]
  );

  let destroyerCoordinate = randomShipPlacement(2, board);

  computer.game.placeShip(
    "destroyer",
    3,
    destroyerCoordinate[0],
    destroyerCoordinate[1]
  );

  let submarineCoordinate = randomShipPlacement(2, board);

  computer.game.placeShip(
    "submarine",
    3,
    submarineCoordinate[0],
    submarineCoordinate[1]
  );

  let patrolBoatCoordinate = randomShipPlacement(1, board);

  computer.game.placeShip(
    "Patrol Boat",
    2,
    patrolBoatCoordinate[0],
    patrolBoatCoordinate[1]
  );
}

function restartGame(gameplay) {
  const board = document.querySelector(".board");
  const firstElementBoard = document.querySelector(".player-two");

  const shipInputDiv = document.createElement("div");
  shipInputDiv.classList.add("ship-input-div");

  const restartDiv = document.createElement("div");
  restartDiv.classList.add("restart-div");
  const restartBtn = document.createElement("button");
  restartBtn.setAttribute("id", "restart-btn");
  restartBtn.textContent = "Restart";

  restartDiv.appendChild(restartBtn);
  shipInputDiv.appendChild(restartDiv);

  board.insertBefore(shipInputDiv, firstElementBoard);

  restartBtn.addEventListener("click", () => {
    shipInputDiv.remove();
    createShipButtonDiv();
    gameplay.restart();
    computerShipPlacement(gameplay);
    removeShipButtonDiv();
    enableEventBoard();
  });
}

export { ScreenController, displayBoard, computerShipPlacement };
