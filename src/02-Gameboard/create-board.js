export function createBoard() {
  let array = [];
  for (let i = 0; i < 10; i++) {
    array[i] = [];
    for (let j = 0; j < 10; j++) {
      array[i][j] = [];
    }
  }
  return array;
}
