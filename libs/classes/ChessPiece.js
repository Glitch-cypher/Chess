export default class ChessPiece {
  constructor(pieceType, color, possibleMoves, movementDistance) {
    this.pieceType = pieceType;
    this.color = color;
    this.possibleMoves = possibleMoves;
    this.hasMoved = false;
    this.movementDistance = movementDistance;
  }
  movePiece() {
    this.hasMoved = true;
  }
}
