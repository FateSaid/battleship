import { gameModeSelection } from "./game-mode-selector.js";
import {
  ScreenController,
  displayBoard,
} from "../05-ScreenController/screencontroller";
import { renderBoard, getPlayerDomBoard } from "../05-ScreenController/dom";
import { GameController } from "../04-Gameplay/gamecontroller.js";
import { createShipButtonDiv } from "../05-ScreenController/dom";

function homeEvents(playerOneButton, playerTwoButton) {
  playerOneButton.addEventListener("click", () => {
    gameModeSelection(1);
  });
  playerTwoButton.addEventListener("click", () => {
    gameModeSelection(2);
  });
}

function restart() {
  const restartBtn = document.querySelector(".restart");

  restartBtn.addEventListener("click", () => {
    location.reload();
  });
}

function shipCoordinateBtnEvent(gameplay) {
  const carrierBtn = document.getElementById("carrier-btn");
  const battleshipBtn = document.getElementById("battleship-btn");
  const destroyerBtn = document.getElementById("destroyer-btn");
  const submarineBtn = document.getElementById("submarine-btn");
  const patrolBoatBtn = document.getElementById("patrol-boat-btn");
  let domBoard = getPlayerDomBoard(gameplay);

  carrierBtn.addEventListener("click", () => {
    let currentPlayer = gameplay.getActivePlayer();
    let carrierCoordinate = getShipInput("carrier");

    currentPlayer.game.placeShip(
      "carrier",
      5,
      carrierCoordinate[0],
      carrierCoordinate[1]
    );
    displayBoard(domBoard, gameplay);
  });

  battleshipBtn.addEventListener("click", () => {
    let currentPlayer = gameplay.getActivePlayer();
    let battleshipCoordinate = getShipInput("battleship");

    currentPlayer.game.placeShip(
      "carrier",
      4,
      battleshipCoordinate[0],
      battleshipCoordinate[1]
    );

    displayBoard(domBoard, gameplay);
  });

  destroyerBtn.addEventListener("click", () => {
    let currentPlayer = gameplay.getActivePlayer();
    let destroyerCoordinate = getShipInput("battleship");

    currentPlayer.game.placeShip(
      "carrier",
      3,
      destroyerCoordinate[0],
      destroyerCoordinate[1]
    );
    displayBoard(domBoard, gameplay);
  });

  submarineBtn.addEventListener("click", () => {
    let currentPlayer = gameplay().getActivePlayer();
    let submarineCoordinate = getShipInput("battleship");

    currentPlayer.game.placeShip(
      "carrier",
      3,
      submarineCoordinate[0],
      submarineCoordinate[1]
    );
    displayBoard(domBoard, gameplay);
  });

  patrolBoatBtn.addEventListener("click", () => {
    let currentPlayer = gameplay.getActivePlayer();
    let patrolBoatCoordinate = getShipInput("battleship");

    currentPlayer.game.placeShip(
      "carrier",
      2,
      patrolBoatCoordinate[0],
      patrolBoatCoordinate[1]
    );
    displayBoard(domBoard, gameplay);
  });
}

function getShipInput(ship) {
  const startXInput = document.getElementById(
    `start-x-${ship.toLowerCase().replace(" ", "-")}`
  ).value;
  const startYInput = document.getElementById(
    `start-y-${ship.toLowerCase().replace(" ", "-")}`
  ).value;

  const endXInput = document.getElementById(
    `end-x-${ship.toLowerCase().replace(" ", "-")}`
  ).value;
  const endYInput = document.getElementById(
    `end-y-${ship.toLowerCase().replace(" ", "-")}`
  ).value;

  return [
    [startXInput, startYInput],
    [endXInput, endYInput],
  ];
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
      } else if (playerTwoNameInput !== null) {
        renderBoard(playerOneNameInput.value, playerTwoNameInput.value);
        gameplay = GameControllerController(
          playerOneNameInput.value,
          playerTwoNameInput.value
        );
        ScreenController(gameplay);
      } else {
        throw new Error("player input error");
      }

      form.remove();
      createShipButtonDiv();
    }
  });
}

export { homeEvents, restart, getPlayerNameInput, shipCoordinateBtnEvent };
