import ChessPiece from '../classes/ChessPiece';
import ChessSquare from '../classes/ChessSquare';
import {
  kingMoves,
  queenMoves,
  knightMoves,
  bishopMoves,
  rookMoves,
  pawnMoves,
} from '../variables/chessMoves';

function createSquares() {
  let arrayofSquares = [];
  let black = true;
  let color = 'Black';
  for (let y = 0; y < 8; y++) {
    let x = 0;
    for (x; x < 8; x++) {
      let chessPiece = null;
      y > 4 ? (color = 'White') : null;
      if (y === 1 || y === 6) {
        chessPiece = new ChessPiece('Pawn', color, pawnMoves, 1);
      } else if (y === 0 || y === 7) {
        if (x === 0 || x === 7) {
          chessPiece = new ChessPiece('Rook', color, rookMoves, 8);
        } else if (x === 1 || x === 6) {
          chessPiece = new ChessPiece('Knight', color, knightMoves, 1);
        } else if (x === 2 || x === 5) {
          chessPiece = new ChessPiece('Bishop', color, bishopMoves, 8);
        } else if (x === 3) {
          chessPiece = new ChessPiece('Queen', color, queenMoves, 8);
        } else if (x === 4) {
          chessPiece = new ChessPiece('King', color, kingMoves, 1);
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
