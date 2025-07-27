import { GameController } from "../04-Gameplay/gamecontroller";
import { initPlayerBoardShip } from "./random-ship-placement";
import { outputMessage } from "../06-DOM/game-screen";
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

    updateActiveUserBoard(gameplay.getActivePlayer(), gameplay);

    updateActiveUserBoard(gameplay.getOpponent(), gameplay);
  };

  initRandomShipPlacementListener(gameplay);
  initStartGameListener(gameplay);

  function updateActiveUserBoard(user, gameplay) {
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
          cell.classList.add("ship");
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
          gameplay.playRound([i, j]);

          updateScreen();
        });

        row.appendChild(cell);
      }
      userDom.appendChild(row);
    }
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

  function getActivePlayerDom(player) {
    const allTitleBoard = document.querySelectorAll(".player-title");

    for (let i = 0; i < allTitleBoard.length; i++) {
      if (allTitleBoard[i].textContent === player) {
        return allTitleBoard[i].nextElementSibling;
      }
    }
  }

  function clearBoard(player) {
    let dom = getActivePlayerDom(player.name);
    dom.textContent = "";
  }
}

export { ScreenController };
