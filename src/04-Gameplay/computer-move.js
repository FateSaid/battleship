function computerMove(opponent) {
  let missedArray = opponent.game.missedAttacks;
  let hitArray = opponent.game.hitAttacks;
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

function randomCoordinates(array) {
  let x = Math.floor(Math.random() * 10);

  let y = Math.floor(Math.random() * 10);

  if (checkDuplicate(array, [x, y])) {
    return [x, y];
  } else {
    return randomCoordinates(array);
  }
}

export { randomCoordinates, checkHitAttacks, checkDuplicate, computerMove };
