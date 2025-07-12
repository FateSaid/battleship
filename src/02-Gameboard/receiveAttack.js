export function attack(
  coordinate,
  board,
  getMissedAttacks,
  addShipsSunk,
  getHitAttacks
) {
  let [x, y] = coordinate;

  if (!Array.isArray(board[x][y])) {
    board[x][y].hit();
    getHitAttacks().push([x, y]);
    if (board[x][y].isSunk()) {
      addShipsSunk();
    }
  } else {
    getMissedAttacks().push([x, y]);
  }
}
