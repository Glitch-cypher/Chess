import reducer from '../functions/reducer';
export default function calculatePossibleMoves(board) {
  // calculates the possible moves for every piece, checking if there are pieces in the way etc.
  board.arrayOfSquares.forEach((square) => {
    if (square.chessPieceContained) {
      let arrayOfMoves = square.chessPieceContained.possibleMoves.reduce(
        reducer,
        [square, board]
      );
      // removing the first two items in the moves array as I handed in some variables in the initial state for the reducer.
      arrayOfMoves.shift();
      arrayOfMoves.shift();
      square.chessPieceContained.setLegalMoves(arrayOfMoves);
    }
  });
  console.log('moves calculated');
}
