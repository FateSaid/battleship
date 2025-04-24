function computerMove(opponent) {
  let missedArray = opponent.game.missedAttacks;
  let hitArray = opponent.game.hitAttacks;
  if (checkHitAttacks(opponent).length > 0) {
    calculateNextTarget(opponent);
  }
  let combinedArray = missedArray.concat(hitArray);
  let [a, b] = randomCoordinates(combinedArray);
  return [a, b];
}

function checkDuplicate(array, coordinate) {
  let stringArray = array.map(JSON.stringify);
  let stringCoordinate = JSON.stringify(coordinate);

  for (let i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === stringCoordinate) {
      return false;
    }
  }
  return true;
}

function calculateNextTarget(opp) {
  //here function for producing potential moves

  potentialMove(opponent);
}

function potentialMove(opp) {
  let board = opp.game.getBoard();
  let hitArray = opp.game.hitAttacks;

  let shipsNotSunk = checkHitAttacks(opp);

  for (let i = 0; i < shipsNotSunk.length; i++) {
    let [x, y] = shipsNotSunk[i];

    if (
      x + 1 <= 9 &&
      !Array.isArray(board[x + 1][y]) &&
      checkDuplicate(hitArray, [x + 1, y])
    ) {
      return [x + 1, y];
    }

    if (
      x - 1 <= 9 &&
      !Array.isArray(board[x - 1][y]) &&
      checkDuplicate(hitArray, [x - 1, y])
    ) {
      return [x - 1, y];
    }

    if (
      y + 1 <= 9 &&
      !Array.isArray(board[x][y + 1]) &&
      checkDuplicate(hitArray, [x, y + 1])
    ) {
      return [x, y + 1];
    }

    if (
      y - 1 <= 9 &&
      !Array.isArray(board[x][y - 1]) &&
      checkDuplicate(hitArray, [x, y - 1])
    ) {
      return [x, y - 1];
    }
  }
}

function plusX(array, combinedArray) {
  let [x, y] = array;
  if (checkDuplicate(combinedArray, [x, y])) {
    return [x + 1, y];
  }
}

function checkHitAttacks(opp) {
  let hitArray = opp.game.hitAttacks;
  let board = opp.game.getBoard();

  return hitArray.filter((el) => {
    let [x, y] = el;
    if (!board[x][y].isSunk()) {
      return el;
    }
  });
}

function filterSameShipHit(opponent) {
  let hitArray = opponent.game.hitAttacks;
  let board = opponent.game.getBoard();
  let [x, y] = hitArray[0];
  let result = [[x, y]];

  for (let i = 1; i < hitArray.length; i++) {
    let [a, b] = hitArray[i];
    if (board[x][y] === board[a][b]) {
      result.push([a, b]);
    }
  }
  return result;
}

function getShipOrientation(array) {
  let [x, y] = array[0];
  for (let i = 1; i < array.length; i++) {
    let [a, b] = array[i];
    if (x === a) {
      return "Horizontal";
    } else if (y === b) {
      return "Vertical";
    }
  }
}

function randomCoordinates(array) {
  let x = Math.floor(Math.random() * 10);

  let y = Math.floor(Math.random() * 10);

  if (checkDuplicate(array, [x, y])) {
    return [x, y];
  } else {
    return randomCoordinates(array);
  }
}

export {
  randomCoordinates,
  checkDuplicate,
  computerMove,
  potentialMove,
  filterSameShipHit,
  checkHitAttacks,
  getShipOrientation,
};
