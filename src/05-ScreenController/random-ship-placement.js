function initPlayerBoardShip(activeUser) {
  activeUser.game.restartBoard();

  placeShipOnBoard(activeUser, "Carrier", 4);

  placeShipOnBoard(activeUser, "Battleship", 3);

  placeShipOnBoard(activeUser, "Destroyer", 2);

  placeShipOnBoard(activeUser, "Submarine", 2);

  placeShipOnBoard(activeUser, "Patrol Boat", 1);
}

function placeShipOnBoard(activeUser, name, length) {
  let board = activeUser.game.getBoard();
  let coordinates = randomShipPlacement(length, board);
  activeUser.game.placeShip(name, length, coordinates[0], coordinates[1]);
}

function randomShipPlacement(length, board) {
  let plane = getRandomPlane();
  let coordinates = getRandomShipCoordinate(plane, length);
  if (!checkCoordinates(coordinates, board)) {
    return randomShipPlacement(length, board);
  }
  return coordinates;
}

function getRandomPlane() {
  let plane = ["horizontal", "vertical"];

  let index = Math.floor(Math.random() * plane.length);
  return plane[index];
}

function getRandomCoordinate() {
  return Math.floor(Math.random() * 10);
}

function getRandomShipCoordinate(axis, length) {
  let startX, startY;
  startX = getRandomCoordinate();
  startY = getRandomCoordinate();

  if (axis === "horizontal") {
    if (startX + length <= 9) {
      return [
        [startX, startY],
        [startX + length, startY],
      ];
    } else if (startX - length >= 0) {
      return [
        [startX, startY],
        [startX - length, startY],
      ];
    } else {
      throw new Error("horizontal coordinates error");
    }
  }

  if (axis === "vertical") {
    if (startY + length <= 9) {
      return [
        [startX, startY],
        [startX, startY + length],
      ];
    } else if (startY - length >= 0) {
      return [
        [startX, startY],
        [startX, startY - length],
      ];
    } else {
      throw new Error("vertical coordinates error");
    }
  }
}

function checkCoordinates(coordinates, board) {
  let [startX, startY] = coordinates[0];
  let [endX, endY] = coordinates[1];

  if (startX === endX) {
    if (startY > endY) {
      for (let i = endY; i <= startY; i++) {
        if (!Array.isArray(board[startX][i])) {
          return false;
        }
      }
    }
    if (endY > startY) {
      for (let i = startY; i <= endY; i++) {
        if (!Array.isArray(board[startX][i])) {
          return false;
        }
      }
    }
  }
  if (startY === endY) {
    if (startX > endX) {
      for (let i = endX; i <= startX; i++) {
        if (!Array.isArray(board[i][startY])) {
          return false;
        }
      }
    }
    if (endX > startX) {
      for (let i = startX; i <= endX; i++) {
        if (!Array.isArray(board[i][startY])) {
          return false;
        }
      }
    }
  }
  return true;
}

export {
  randomShipPlacement,
  checkCoordinates,
  getRandomShipCoordinate,
  initPlayerBoardShip,
};
