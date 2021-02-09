export default class ChessPiece {
  constructor(pieceType, color, possibleMoves, movementDistance, image) {
    this.pieceType = pieceType;
    this.color = color;
    this.possibleMoves = possibleMoves;
    this.hasMoved = false;
    this.movementDistance = movementDistance;
    this.image = image;
  }
  movePiece() {
    this.hasMoved = true;
  }
  setLegalMoves(legalMoves) {
    this.legalMoves = legalMoves;
  }
}
