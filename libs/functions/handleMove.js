import reducer from './reducer';
export default function handleMove(
  square,
  setPotentialMoves,
  board,
  potentialMoves,
  setPieceToMove
) {
  // selects the square that you want to move the piece from that contains a piece.
  setPieceToMove(square);

  // sets the state for all potential moves for the selected piece
  setPotentialMoves(square.chessPieceContained.legalMoves);

  // Checks which
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
