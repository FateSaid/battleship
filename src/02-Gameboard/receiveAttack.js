export function attack(coordinate, board, missedAttacks, addShipsSunk) {
  let [x, y] = coordinate;

  if (board[x][y].length === 2) {
    board[x][y][0].hit();
    board[x][y][1] = 1;
    if (board[x][y][0].isSunk()) {
      addShipsSunk();
    }
  } else {
    missedAttacks.push([x, y]);
  }
}
