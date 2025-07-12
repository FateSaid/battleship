import {
  checkCoordinates,
  randomShipPlacement,
  getRandomShipCoordinate,
} from "./random-ship-placement";
import { Player } from "../03-Player/player";

describe("test getRandomShipCoordinate", () => {
  let coordinates = getRandomShipCoordinate("horizontal", 1);
  expect(coordinates).toBeDefined();
});

describe("Test checkCoordinates function", () => {
  const amy = Player("Amy");
  amy.game.placeShip("Patrol Boat", 1, [0, 0], [0, 1]);
  let board = amy.game.getBoard();
  test("function returns false", () => {
    expect(
      checkCoordinates(
        [
          [0, 0],
          [0, 1],
        ],
        board
      )
    ).toBeFalsy();
    expect(board[0][1].name).toBe("Patrol Boat");
  });

  test("function returns true", () => {
    expect(
      checkCoordinates(
        [
          [3, 2],
          [4, 2],
        ],

        board
      )
    ).toBeTruthy();
  });

  test("should return false for similar coordinate but different axis", () => {
    const todd = Player("Todd");
    let board = todd.game.getBoard();
    todd.game.placeShip("submarine", 3, [5, 5], [3, 5]);

    expect(
      checkCoordinates(
        [
          [3, 5],
          [3, 2],
        ],
        board
      )
    ).toBeFalsy();
  });
});

describe("test checkShip function", () => {
  const hellen = Player("Hellen");

  let board = hellen.game.getBoard();

  let patrol = randomShipPlacement(1, board);
  test("Return true", () => {
    hellen.game.placeShip("Patrol Boat", 2, patrol[0], patrol[1]);

    expect(checkShip(board, patrol, "Patrol Boat"));
  });

  test("Return false", () => {
    let coordinate = [
      [0, 4],
      [0, 7],
    ];
    expect(checkShip(board, coordinate, "submarine")).toBeFalsy();
  });
});

describe("test randomShipPlacement", () => {
  const tom = Player("Tom");
  let board = tom.game.getBoard();

  test("Should not overwrite ships", () => {
    let carrier = randomShipPlacement(4, board);

    tom.game.placeShip("carrier", 5, carrier[0], carrier[1]);

    let battleship = randomShipPlacement(3, board);

    tom.game.placeShip("battleship", 4, battleship[0], battleship[1]);

    let destroyer = randomShipPlacement(2, board);

    tom.game.placeShip("destroyer", 3, destroyer[0], destroyer[1]);

    let submarine = randomShipPlacement(2, board);

    tom.game.placeShip("submarine", 3, submarine[0], submarine[1]);

    let patrol = randomShipPlacement(1, board);

    tom.game.placeShip("Patrol Boat", 2, patrol[0], patrol[1]);

    expect(checkShip(board, carrier, "carrier")).toBeTruthy();
    expect(checkShip(board, battleship, "battleship")).toBeTruthy();
    expect(checkShip(board, destroyer, "destroyer")).toBeTruthy();
    expect(checkShip(board, submarine, "submarine")).toBeTruthy();
    expect(checkShip(board, patrol, "Patrol Boat")).toBeTruthy();
  });
});

function checkShip(board, coordinate, shipName) {
  let [startX, startY] = coordinate[0];
  let [endX, endY] = coordinate[1];

  if (startX === endX) {
    if (startY > endY) {
      for (let i = endY; i <= startY; i++) {
        if (board[startX][i].name !== shipName) {
          return false;
        }
      }
    } else {
      for (let i = startY; i <= endY; i++) {
        if (board[startX][i].name !== shipName) {
          return false;
        }
      }
    }
  } else if (startY === endY) {
    if (startX > endX) {
      for (let i = endX; i <= startX; i++) {
        if (board[i][startY].name !== shipName) {
          return false;
        }
      }
    } else {
      for (let i = startX; i <= endX; i++) {
        if (board[i][startY].name !== shipName) {
          return false;
        }
      }
    }
  }
  return true;
}
