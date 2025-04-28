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

function calculateNextTarget(opponent) {
  //here function for producing potential moves

  if (filterSameShipHit(opponent).length > 1) {
    return predictShipLocation(opponent);
  }

  return potentialMove(opponent);
}

function predictShipLocation(opp) {
  let missedArray = opp.game.missedAttacks;
  let hitArray = opp.game.hitAttacks;
  let combinedArray = missedArray.concat(hitArray);

  let sameShipCoordinate = filterSameShipHit(opp);
  let planeAlignment = getShipOrientation(sameShipCoordinate);

  for (let i = 0; i < sameShipCoordinate.length; i++) {
    let [x, y] = sameShipCoordinate[i];
    if (planeAlignment === "Vertical") {
      if (x + 1 <= 9 && checkDuplicate(combinedArray, [x + 1, y])) {
        return plusX(x, y);
      }

      if (x - 1 >= 0 && checkDuplicate(combinedArray, [x - 1, y])) {
        return minusX(x, y);
      }
    }

    if (planeAlignment === "Horizontal") {
      if (y + 1 <= 9 && checkDuplicate(combinedArray, [x, y + 1])) {
        return plusY(x, y);
      }
      if (y - 1 >= 0 && checkDuplicate(combinedArray, [x, y - 1])) {
        return minusY(x, y);
      }
    }
  }
}

function potentialMove(opp) {
  let missedArray = opp.game.missedAttacks;
  let hitArray = opp.game.hitAttacks;
  let combinedArray = missedArray.concat(hitArray);

  let shipsNotSunk = checkHitAttacks(opp);

  for (let i = 0; i < shipsNotSunk.length; i++) {
    let [x, y] = shipsNotSunk[i];

    if (x + 1 <= 9 && checkDuplicate(combinedArray, [x + 1, y])) {
      return plusX(x, y);
    }

    if (x - 1 >= 0 && checkDuplicate(combinedArray, [x - 1, y])) {
      return minusX(x, y);
    }

    if (y + 1 <= 9 && checkDuplicate(combinedArray, [x, y + 1])) {
      return plusY(x, y);
    }

    if (y - 1 >= 0 && checkDuplicate(combinedArray, [x, y - 1])) {
      return minusY(x, y);
    }
  }
}

function plusX(x, y) {
  return [x + 1, y];
}

function minusX(x, y) {
  return [x - 1, y];
}

function plusY(x, y) {
  return [x, y + 1];
}

function minusY(x, y) {
  return [x, y - 1];
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

  if (hitArray[0] === undefined) {
    return 0;
  }

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
  predictShipLocation,
  calculateNextTarget,
};
