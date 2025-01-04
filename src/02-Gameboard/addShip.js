export function addShip(ship, start, end, board) {
  let [x1, y1] = start;
  let [x2, y2] = end;

  if (x1 === x2) {
    loopCoordinates(x1, [y1, y2], "horizontal");
  }

  if (y1 === y2) {
    loopCoordinates(y1, [x1, x2], "vertical");
  }
}

function loopCoordinates(same, diff, ship) {
  let [diff1, diff2] = diff;

  if (diff1 > diff2) {
    for (let i = diff1; i >= diff2; i--) {
      if (board[same][i] === ship) {
        throw new Error("Already contains ship");
      }
    }
  }
}
