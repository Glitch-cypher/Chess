import handleMove from '../libs/functions/handleMove';
export default function Board({
  board,
  pieceToMove,
  setPieceToMove,
  setPlayerTurn,
  playerTurn,
  setPotentialMoves,
  potentialMoves,
}) {
  function handleClick(square) {
    handleMove(
      square,
      setPotentialMoves,
      board,
      potentialMoves,
      setPieceToMove
    );
  }
  return (
    <div
      style={{
        display: 'flex',
        position: 'relative',
        flexWrap: 'wrap',
        height: '410px',
        width: '410px',
        border: '5px solid brown',
      }}>
      {board.arrayOfSquares.map((square) => {
        let p = square.chessPieceContained;
        let textColor = square.black ? 'white' : 'black';
        let color = square.black ? 'black' : 'white';
        return (
          <div
            key={`${square.gridValue[0]}${square.gridValue[1]} `}
            onClick={() => {
              square.readyPiece(handleClick, playerTurn);
            }}
            style={{
              height: '50px',
              width: '50px',
              position: 'relative',
              color: textColor,
              backgroundColor: color,
            }}>
            {p ? `${p.color} ${p.pieceType}` : null}
          </div>
        );
      })}
      {potentialMoves
        ? potentialMoves.map((coordinate) => {
            let top = coordinate[1] * 50;
            let left = coordinate[0] * 50;
            return (
              <div
                key={`${top} ${left}`}
                onClick={() => {
                  let square = board.arrayOfSquares
                    .filter(
                      (tile) =>
                        tile.gridValue[0] === coordinate[0] &&
                        tile.gridValue[1] === coordinate[1]
                    )
                    .pop();
                  if (
                    square.gridValue !== pieceToMove.gridValue &&
                    pieceToMove !== undefined
                  ) {
                    square.movePiece(pieceToMove, setPlayerTurn, playerTurn);
                  }
                  setPieceToMove(undefined);
                  setPotentialMoves([]);

                  board.arrayOfSquares.forEach((square) => {
                    if (square.highlighted) {
                      square.setHighlight();
                    }
                  });
                }}
                style={{
                  position: 'absolute',
                  top: `${top}px`,
                  left: `${left}px`,
                  height: '50px',
                  width: '50px',
                  opacity: '0.5',
                  borderRadius: '50%',
                  backgroundColor: 'yellow',
                }}></div>
            );
          })
        : null}
    </div>
  );
}
