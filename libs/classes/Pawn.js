import ChessPiece from './ChessPiece';
import { pawnMoves } from '../variables/chessMoves';

class Pawn extends ChessPiece(pieceType, color) {
  constructor() {
    super(pieceType, color, pawnMoves);
    this.enPassant = false;
  }
}
