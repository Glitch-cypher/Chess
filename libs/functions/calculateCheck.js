export default function calculateCheck(board, playerTurn) {
  let yourKing = board.arrayOfSquares.find((square) => {
    if (square.chessPieceContained) {
      return (
        square.chessPieceContained.color === playerTurn &&
        square.chessPieceContained.pieceType === 'King'
      );
    }
  });
  let check = board.arrayOfSquares.some((square) => {
    if (square.chessPieceContained) {
      if (square.chessPieceContained.color !== playerTurn) {
        return square.chessPieceContained.legalMoves.some((move) => {
          console.log(yourKing.gridValue + ' ' + move);
          return (
            yourKing.gridValue[0] === move[0] &&
            yourKing.gridValue[1] === move[1]
          );
        });
      }
    }
  });
  console.log(check);
}
