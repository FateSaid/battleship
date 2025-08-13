import { GameController } from "../04-Gameplay/gamecontroller";
import { initPlayerBoardShip } from "./random-ship-placement";
import {
  outputMessage,
  disableBoardEvent,
  toggleStartBtn,
  togglesDisable,
  toggleBoardEvent,
  removeShipInputDivs,
  reinstateShipInputDiv,
  createMessageOutput,
  openDialog,
} from "../06-DOM/game-screen";
function ScreenController(play1, play2) {
  let gameplay = GameController(play1, play2);

  //close dialog modal btn
  const closeDialogBtn = document.getElementById("close-modal");
  const dialog = document.querySelector("dialog");

  closeDialogBtn.addEventListener("click", () => {
    dialog.close();
    updateScreen();
  });

  //shows whether 1P or 2P game
  let gameMode;

  if (play2 === "Computer") {
    gameMode = "single";
  } else if (play2 !== "Computer") {
    gameMode = "multi";
  }

  //output player turn
  outputMessage(`${gameplay.getActivePlayer().name}'s turn!`);

  const updateScreen = () => {
    //clear board
    const boardDiv = document.querySelectorAll(".player-board");

    boardDiv.forEach((board) => {
      board.textContent = "";
    });

    if (gameMode === "multi") {
      outputMessage("");

      //output player turn
      outputMessage(`${gameplay.getActivePlayer().name}'s turn!`);
    }

    //update board

    updateActiveUserBoard(gameplay.getActivePlayer());

    updateActiveUserBoard(gameplay.getOpponent());

    //disable activePlayer event board

    disableActivePlayerBoard(
      gameplay.getActivePlayer().name,
      gameplay.getOpponent().name
    );
  };

  initRandomShipPlacementListener(gameplay);
  initStartGameListener(gameplay);

  function updateActiveUserBoard(user) {
    const playerName = user.name;

    const board = user.game.getBoard();

    const hitArray = user.game.getHitAttacks();

    const missArray = user.game.getMissedAttacks();

    const userDom = getActivePlayerDom(playerName);

    for (let i = 0; i < board.length; i++) {
      const row = document.createElement("div");
      row.classList.add("row");

      for (let j = 0; j < board[i].length; j++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");

        //mark ship location for user

        if (!Array.isArray(board[i][j])) {
          if (gameplay.getActivePlayer().name === playerName) {
            cell.classList.add("ship");
          }
        }

        //hit attacks mark cell
        hitArray.forEach((item) => {
          let [a, b] = item;
          if (a === i && b === j) {
            cell.classList.add("damage");
          }
        });

        //missed attacks mark cell
        missArray.forEach((item) => {
          let [a, b] = item;
          if (a === i && b === j) {
            cell.classList.add("missed");
          }
        });

        //cell event handler
        cell.addEventListener("click", () => {
          if (typeof gameplay.playRound([i, j]) === "string") {
            clearBoard(gameplay.getOpponent());
            updateActiveUserBoard(gameplay.getOpponent());
            disableBoardEvent();
            if (gameMode === "single") {
              reinstateShipInputDiv();
              initStartGameListener();
              outputMessage(`Winner is ${gameplay.getActivePlayer().name}!`);
              togglesDisable(document.getElementById("random-ship-btn"));
              togglesDisable(document.getElementById("start-btn"));
              toggleStartBtn();
            }
          } else {
            if (play2 !== "Computer") {
              openDialog(gameplay.getActivePlayer().name);
            } else {
              updateScreen();
            }
          }
        });

        row.appendChild(cell);
      }
      userDom.appendChild(row);
    }
  }
  function initRandomShipPlacementListener() {
    const btn = document.getElementById("random-ship-btn");

    const startBtn = document.getElementById("start-btn");

    btn.addEventListener("click", () => {
      const activePlayer = gameplay.getActivePlayer();

      clearBoard(activePlayer);
      initPlayerBoardShip(activePlayer);
      updateActiveUserBoard(activePlayer);

      //disable activeBoard
      disableActivePlayerBoard(
        gameplay.getActivePlayer().name,
        gameplay.getOpponent().name
      );

      if (startBtn.classList.contains("disable")) {
        togglesDisable(startBtn);
      }
    });
  }

  function initStartGameListener() {
    const startBtn = document.getElementById("start-btn");

    let countStart = 0;

    const resetCount = () => (countStart = 0);

    startBtn.addEventListener("click", () => {
      const opponent = gameplay.getOpponent();

      countStart++;

      //stop executing if first board is empty
      let playerOneBoard = document.getElementById("player-one-board");
      let playerTwoBoard = document.getElementById("player-two-board");

      if (playerOneBoard.childElementCount === 0) {
        return;
      }

      //Player1 options
      if (gameMode === "single") {
        if (playerTwoBoard.childElementCount === 0) {
          removeShipInputDivs();
          initPlayerBoardShip(opponent);
          updateActiveUserBoard(opponent);
        } else {
          resetPlayerBoards(gameplay);
          clearAllBoard();
          initRandomShipPlacementListener();
          togglesDisable(playerTwoBoard);
        }
      }

      //player 2 turn ship random
      if (gameMode === "multi") {
        if (countStart === 2) {
          removeShipInputDivs();
          createMessageOutput();
          gameplay.switchPlayer();
          updateScreen();
          return;
        }
        if (playerTwoBoard.childElementCount !== 0) {
          clearAllBoard();
          resetPlayerBoards(gameplay);
          toggleStartBtn();
          resetCount();
          return;
        } else {
          gameplay.switchPlayer();
          openDialog(gameplay.getActivePlayer().name);
          updateScreen();
          togglesDisable(startBtn);
        }

        return;
      }
    });
  }

  function clearBoard(player) {
    let dom = getActivePlayerDom(player.name);
    dom.textContent = "";
  }
}

function clearAllBoard() {
  const playerBoards = document.querySelectorAll(".player-board");
  playerBoards.forEach((board) => {
    board.textContent = "";
  });
}

function resetPlayerBoards(gameplay) {
  gameplay.restart();
}

function disableActivePlayerBoard(player, opponent) {
  const playerDom = getActivePlayerDom(player);
  const opponentDom = getActivePlayerDom(opponent);

  if (!playerDom.classList.contains("disable")) {
    playerDom.classList.add("disable");
    opponentDom.classList.remove("disable");
  }
}

function getActivePlayerDom(player) {
  const allTitleBoard = document.querySelectorAll(".player-title");

  for (let i = 0; i < allTitleBoard.length; i++) {
    if (allTitleBoard[i].textContent === player) {
      return allTitleBoard[i].nextElementSibling;
    }
  }
}

export { ScreenController };
