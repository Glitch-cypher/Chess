import createSquares from '../libs/functions/createSquares';

export default class ChessBoard {
  constructor() {
    this.arrayOfSquares = createSquares();
  }
}
