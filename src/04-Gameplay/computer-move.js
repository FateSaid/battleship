function generateComputerMove(hitAttacks, missedAttacks, board) {}

//get randomCoordinate to be recursive

function randomCoordinate(totalArray) {
  let [x, y] = createCoordinate();

  if (!checkDuplicate(totalArray, [x, y])) {
    return [x, y];
  } else {
    throw new Error("Duplicate");
  }
}

function checkDuplicate(totalArray, coordinate) {
  let stringTotal = totalArray.map((item) => JSON.stringify(item));
  let stringCoordinate = JSON.stringify(coordinate);
  return stringTotal.includes(stringCoordinate);
}

function createCoordinate() {
  let x = Math.floor(Math.random() * 10);
  let y = Math.floor(Math.random() * 10);
  return [x, y];
}

export { randomCoordinate, checkDuplicate };
