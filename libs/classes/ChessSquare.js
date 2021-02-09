import calculatePossibleMoves from '../functions/calculatePossibleMoves';
import calculateCheck from '../functions/calculateCheck';
export default class ChessSquare {
  constructor(black, chessPiece, gridValue) {
    this.black = black;
    this.chessPieceContained = chessPiece;
    this.gridValue = gridValue;
    this.highlighted = false;
  }
  readyPiece(setPieceToMove, playerTurn) {
    if (this.chessPieceContained) {
      if (this.chessPieceContained.color === playerTurn) setPieceToMove(this);
    }
  }
  setHighlight() {
    this.highlighted = !this.highlighted;
  }
  setPiece(piece = null) {
    this.chessPieceContained = piece;
  }
  movePiece(pieceToMove, setPlayerTurn, playerTurn, board) {
    let move = () => {
      let turn = playerTurn === 'White' ? 'Black' : 'White';
      setPlayerTurn(turn);
      this.chessPieceContained = pieceToMove.chessPieceContained;
      pieceToMove.setPiece();
      this.chessPieceContained.movePiece();
      calculatePossibleMoves(board);
      calculateCheck(board, playerTurn);
    };
    if (
      !this.chessPieceContained ||
      pieceToMove.chessPieceContained.color !== this.chessPieceContained.color
    ) {
      move();
    }
  }
}
