import ChessPiece from '../../components/ChessPiece';
import ChessSquare from '../../components/ChessSquare';

function createSquares() {
  let arrayofSquares = [];
  let black = true;
  for (let y = 0; y < 8; y++) {
    let x = 0;
    for (x; x < 8; x++) {
      let chessPiece = null;
      if (y === 1 || y === 6) {
        chessPiece = new ChessPiece('pawn', 1);
      } else if (y === 0 || y === 7) {
        if (x === 0 || x === 7) {
          chessPiece = new ChessPiece('rook', 8);
        } else if (x === 1 || x === 6) {
          chessPiece = new ChessPiece('knight', 1);
        } else if (x === 2 || x === 5) {
          chessPiece = new ChessPiece('bishop', 8);
        } else if (x === 3) {
          chessPiece = new ChessPiece('queen', 8);
        } else if (x === 4) {
          chessPiece = new ChessPiece('king', 1);
        }
      }
      let object = new ChessSquare(black, chessPiece, [x, y]);
      arrayofSquares.push(object);
      black = !black;
    }
    black = !black;
  }
  return arrayofSquares;
}

export default createSquares;
