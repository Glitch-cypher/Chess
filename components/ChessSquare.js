export default class ChessSquare {
  constructor(black, chessPeice, gridValue) {
    this.black = black;
    this.chessPeiceContained = chessPeice;
    this.gridValue = gridValue;
  }
  readyPiece(setPieceToMove, pieceToMove) {
    setPieceToMove(this);
    console.log(pieceToMove);
  }
  movePiece(piece) {
    this.chessPeiceContained = piece;
    console.log(this.chessPeiceContained.pieceType || 'empty');
  }
}
