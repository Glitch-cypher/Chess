const reducer = (accumulator, currentValue) => {
  let tempArray = [];
  let board = accumulator[1].arrayOfSquares;
  let square = accumulator[0];
  let distance = square.chessPieceContained.movementDistance + 1;
  let curX = currentValue[0];
  let curY = currentValue[1];
  if (
    square.chessPieceContained.pieceType === 'Pawn' &&
    square.chessPieceContained.hasMoved === false &&
    curX === 0
  ) {
    distance++;
  }
  if (square.chessPieceContained.color === 'White') {
    curX = curX * -1;
    curY = curY * -1;
  }
  for (let i = 1; i < distance; i++) {
    let x = curX * i + square.gridValue[0];
    let y = curY * i + square.gridValue[1];
    if (x < 8 && x >= 0 && y < 8 && y >= 0) {
      let tile = board.filter((object) => {
        return object.gridValue[0] === x && object.gridValue[1] === y;
      });
      if (tile[0].chessPieceContained === null) {
        if (square.chessPieceContained.pieceType === 'Pawn' && curX !== 0) {
          return [...accumulator];
        }
        tempArray = [...tempArray, [x, y]];
      } else if (
        tile[0].chessPieceContained.color !== square.chessPieceContained.color
      ) {
        if (square.chessPieceContained.pieceType === 'Pawn' && curX === 0) {
          return [...accumulator];
        }
        tempArray = [...tempArray, [x, y]];
        return [...accumulator, ...tempArray];
      } else {
        return [...accumulator, ...tempArray];
      }
    }
  }
  return [...accumulator, ...tempArray];
};
export default reducer;
