const reducer = (accumulator, currentValue) => {
  let tempArray = [];
  for (let i = 1; i < 8; i++) {
    tempArray = [...tempArray, [currentValue[0] * i, currentValue[1] * i]];
  }
  return [...accumulator, ...tempArray];
};

let pawnMoves = [
  [0, 1],
  [1, 1],
  [-1, 1],
];

let rookMoves = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

let bishopMoves = [
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];

let knightMoves = [
  [2, -1],
  [2, 1],
  [1, -2],
  [1, 2],
  [-1, 2],
  [-1, -2],
  [-2, 1],
  [-2, -1],
];

let queenMoves = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];

let kingMoves = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];

export {
  kingMoves,
  queenMoves,
  knightMoves,
  bishopMoves,
  rookMoves,
  pawnMoves,
};
