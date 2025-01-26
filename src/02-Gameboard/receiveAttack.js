export function attack(
  coordinate,
  board,
  missedAttacks,
  addShipsSunk,
  hitAttacks
) {
  let [x, y] = coordinate;

  if (!Array.isArray(board[x][y])) {
    board[x][y].hit();
    hitAttacks.push([x, y]);
    if (board[x][y].isSunk()) {
      addShipsSunk();
    }
  } else {
    missedAttacks.push([x, y]);
  }
}
