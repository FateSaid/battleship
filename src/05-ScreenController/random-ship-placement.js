function randomShipPlacement(length) {
  let plane = getRandomPlane();
  return getRandomShipCoordinate(plane, length);
}

function getRandomPlane() {
  let plane = ["horizontal", "vertical"];

  let index = Math.floor(Math.random() * plane.length);
  return plane[index];
}

function getRandomCoordinate() {
  return Math.floor(Math.random() * 10);
}

function getRandomShipCoordinate(axis, length) {
  let startX, startY;
  startX = getRandomCoordinate();
  startY = getRandomCoordinate();

  if (axis === "horizontal") {
    if (startX + length <= 9) {
      return [
        [startX, startY],
        [startX + length, startY],
      ];
    } else if (startX - length >= 0) {
      return [
        [startX, startY],
        [startX - length, startY],
      ];
    } else {
      throw new Error("horizontal coordinates error");
    }
  }

  if (axis === "vertical") {
    if (startY + length <= 9) {
      return [
        [startX, startY],
        [startX, startY + length],
      ];
    } else if (startX - length >= 0) {
      return [
        [startX, startY],
        [startX, startY - length],
      ];
    } else {
      throw new Error("vertical coordinates error");
    }
  }
}

export { randomShipPlacement };
