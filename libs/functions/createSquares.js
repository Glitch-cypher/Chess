import ChessPiece from '../classes/ChessPiece';
import ChessSquare from '../classes/ChessSquare';
import WhiteKing from '../../public/whitePieces/WhiteKing.svg';
import WhiteQueen from '../../public/whitePieces/WhiteQueen.svg';
import WhiteRook from '../../public/whitePieces/WhiteRook.svg';
import WhiteBishop from '../../public/whitePieces/WhiteBishop.svg';
import WhiteKnight from '../../public/whitePieces/WhiteKnight.svg';
import WhitePawn from '../../public/whitePieces/WhitePawn.svg';
import BlackKing from '../../public/blackPieces/BlackKing.svg';
import BlackQueen from '../../public/blackPieces/BlackQueen.svg';
import BlackRook from '../../public/blackPieces/BlackRook.svg';
import BlackBishop from '../../public/blackPieces/BlackBishop.svg';
import BlackKnight from '../../public/blackPieces/BlackKnight.svg';
import BlackPawn from '../../public/blackPieces/BlackPawn.svg';
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
  let Pawn = BlackPawn;
  let Knight = BlackKnight;
  let Bishop = BlackBishop;
  let Rook = BlackRook;
  let King = BlackKing;
  let Queen = BlackQueen;
  for (let y = 0; y < 8; y++) {
    let x = 0;
    for (x; x < 8; x++) {
      let chessPiece = null;
      y > 4
        ? ((color = 'White'),
          (Pawn = WhitePawn),
          (Knight = WhiteKnight),
          (Bishop = WhiteBishop),
          (Rook = WhiteRook),
          (King = WhiteKing),
          (Queen = WhiteQueen))
        : null;
      if (y === 1 || y === 6) {
        chessPiece = new ChessPiece('Pawn', color, pawnMoves, 1, Pawn);
      } else if (y === 0 || y === 7) {
        if (x === 0 || x === 7) {
          chessPiece = new ChessPiece('Rook', color, rookMoves, 8, Rook);
        } else if (x === 1 || x === 6) {
          chessPiece = new ChessPiece('Knight', color, knightMoves, 1, Knight);
        } else if (x === 2 || x === 5) {
          chessPiece = new ChessPiece('Bishop', color, bishopMoves, 8, Bishop);
        } else if (x === 3) {
          chessPiece = new ChessPiece('Queen', color, queenMoves, 8, Queen);
        } else if (x === 4) {
          chessPiece = new ChessPiece('King', color, kingMoves, 1, King);
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
