export function attack(coordinate, board, missedAttacks, addShipsSunk) {
  let [x, y] = coordinate;

  if (!Array.isArray(board[x][y])) {
    board[x][y].hit();
    if (board[x][y].isSunk()) {
      addShipsSunk();
    }
  } else {
    missedAttacks.push([x, y]);
  }
}
