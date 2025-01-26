export function addShip(ship, start, end, board) {
  let [x1, y1] = start;
  let [x2, y2] = end;

  if (x1 === x2) {
    if (y1 > y2) {
      loopCoordinates(x1, [y1, y2], "horizontal", ship, board);
    } else {
      loopCoordinates(x1, [y2, y1], "horizontal", ship, board);
    }
  }

  if (y1 === y2) {
    if (x1 > x2) {
      loopCoordinates(y1, [x1, x2], "vertical", ship, board);
    } else {
      loopCoordinates(y1, [x2, x1], "vertical", ship, board);
    }
  }
}

function loopCoordinates(same, diff, pos, ship, board) {
  let [diff1, diff2] = diff;

  for (let i = diff1; i >= diff2; i--) {
    if (pos === "horizontal") {
      if (board[same][i][0] === ship) {
        throw new Error("It already contains ship object");
      }
      board[same][i] = ship;
    }

    if (pos === "vertical") {
      if (board[i][same][0] === ship) {
        throw new Error("It already contains ship object");
      }
      board[i][same] = ship;
    }
  }
}
