import reducer from './reducer';
export default function handleMove(
  square,
  setPotentialMoves,
  board,
  potentialMoves,
  setPieceToMove
) {
  setPieceToMove(square);
  let moves = square.chessPieceContained.possibleMoves.reduce(reducer, [
    square,
    board,
  ]);
  moves.shift();
  moves.shift();
  setPotentialMoves(moves);
  let tempArray = board.arrayOfSquares.filter((tile) => {
    return (
      potentialMoves.filter((coordinate) => {
        if (
          coordinate[0] === tile.gridValue[0] &&
          coordinate[1] === tile.gridValue[1]
        ) {
          return true;
        }
      }).length > 0
    );
  });
  tempArray.forEach((object) => {
    object.setHighlight();
  });
}
