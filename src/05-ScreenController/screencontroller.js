import { GameController } from "../04-Gameplay/gamecontroller";
import { initPlayerBoardShip } from "./random-ship-placement";
import {
  outputMessage,
  disableBoardEvent,
  toggleStartBtn,
  togglesDisable,
  toggleBoardEvent,
} from "../06-DOM/game-screen";
function ScreenController(play1, play2) {
  let gameplay = GameController(play1, play2);

  //output player turn
  outputMessage(`${gameplay.getActivePlayer().name}'s turn!`);

  const updateScreen = () => {
    //clear board
    const boardDiv = document.querySelectorAll(".player-board");

    boardDiv.forEach((board) => {
      board.textContent = "";
    });

    outputMessage("");

    //output player turn
    outputMessage(`${gameplay.getActivePlayer().name}'s turn!`);

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
            disableBoardEvent();
          } else {
            updateScreen();
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
    const randomBtn = document.getElementById("random-ship-btn");

    const opponent = gameplay.getOpponent();

    startBtn.addEventListener("click", () => {
      //player 2 turn ship random
      if (play2 !== "Computer") {
        if (
          document.getElementById("player-two-board").childElementCount !== 0
        ) {
          clearAllBoard();
          resetPlayerBoards(gameplay);
          toggleStartBtn();
          return;
        } else {
          gameplay.switchPlayer();
          updateScreen();
        }

        return;
      }

      //toggle disable randomBtn
      togglesDisable(randomBtn);

      //check if 2nd board is empty
      if (document.getElementById("player-two-board").childElementCount === 0) {
        initPlayerBoardShip(opponent);
        updateActiveUserBoard(opponent);
        toggleStartBtn();
      } else {
        resetPlayerBoards(gameplay);
        clearAllBoard();
        toggleStartBtn();
        outputMessage("");

        //disable startBtn
        togglesDisable(startBtn);

        //output player turn
        outputMessage(`${gameplay.getActivePlayer().name}'s turn!`);
        toggleBoardEvent(gameplay.getActivePlayer().name);
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
