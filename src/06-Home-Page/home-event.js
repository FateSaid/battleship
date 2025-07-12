import { gameModeSelection } from "./game-mode-selector.js";
import {
  ScreenController,
  displayBoard,
  computerShipPlacement,
} from "../05-ScreenController/screencontroller";
import {
  renderBoard,
  getPlayerDomBoard,
  createShipButtonDiv,
  startTheGame,
  removeShipButtonDiv,
  disableEventBoard,
  enableEventBoard,
} from "../05-ScreenController/dom";
import { GameController } from "../04-Gameplay/gamecontroller.js";
import { randomShipPlacement } from "../05-ScreenController/random-ship-placement.js";

function homeEvents(playerOneButton, playerTwoButton) {
  playerOneButton.addEventListener("click", () => {
    gameModeSelection(1);
  });
  playerTwoButton.addEventListener("click", () => {
    gameModeSelection(2);
  });
}

function exit() {
  const exitBtn = document.querySelector(".exit");

  exitBtn.addEventListener("click", () => {
    location.reload();
  });
}

function generateRandomShipEvent(gameplay) {
  const randomBtn = document.getElementById("random-ship-generator-btn");
  const boardDom = getPlayerDomBoard(gameplay);
  const player = gameplay.getActivePlayer();

  randomBtn.addEventListener("click", () => {
    player.game.restartBoard();
    let board = player.game.getBoard();

    let carrierCoordinate = randomShipPlacement(4, board);

    player.game.placeShip(
      "carrier",
      5,
      carrierCoordinate[0],
      carrierCoordinate[1]
    );

    let battleshipCoordinate = randomShipPlacement(3, board);

    player.game.placeShip(
      "battleship",
      4,
      battleshipCoordinate[0],
      battleshipCoordinate[1]
    );

    let destroyerCoordinate = randomShipPlacement(2, board);

    player.game.placeShip(
      "destroyer",
      3,
      destroyerCoordinate[0],
      destroyerCoordinate[1]
    );

    let submarineCoordinate = randomShipPlacement(2, board);

    player.game.placeShip(
      "submarine",
      3,
      submarineCoordinate[0],
      submarineCoordinate[1]
    );

    let patrolBoatCoordinate = randomShipPlacement(1, board);

    player.game.placeShip(
      "Patrol Boat",
      2,
      patrolBoatCoordinate[0],
      patrolBoatCoordinate[1]
    );

    displayBoard(boardDom, gameplay);
  });
}

function getPlayerNameInput(form, btn) {
  const playerOneNameInput = document.getElementById("player-one-name");
  const playerTwoNameInput = document.getElementById("player-two-name");
  let gameplay;
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (form.checkValidity()) {
      if (playerTwoNameInput === null) {
        renderBoard(playerOneNameInput.value, "Computer");
        gameplay = GameController(playerOneNameInput.value);
        ScreenController(gameplay);
        disableEventBoard();
        createShipButtonDiv();
        generateRandomShipEvent(gameplay);
      } else if (playerTwoNameInput !== null) {
        renderBoard(playerOneNameInput.value, playerTwoNameInput.value);
        gameplay = GameControllerController(
          playerOneNameInput.value,
          playerTwoNameInput.value
        );
        ScreenController(gameplay);
        disableEventBoard;
        createShipButtonDiv();
        generateRandomShipEvent(gameplay);
      } else {
        throw new Error("player input error");
      }

      form.remove();
    }
    startTheGame();
    startGameEvent(gameplay);
    disableEventBoard();
  });
}

function startGameEvent(gameplay) {
  const startBtn = document.getElementById("start-game-btn");

  startBtn.addEventListener("click", (e) => {
    removeShipButtonDiv();
    enableEventBoard();
    computerShipPlacement(gameplay);
    e.stopPropagation();
  });
}

export { homeEvents, exit, getPlayerNameInput, startGameEvent };
