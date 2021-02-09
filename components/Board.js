import handleMove from '../libs/functions/handleMove';
import React from 'react';
import styles from '../styles/Board.module.css';
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
        height: '41vh',
        width: '41vh',
        border: '0.5vh solid black',
      }}>
      {board.arrayOfSquares.map((square) => {
        let p = square.chessPieceContained;
        let color = square.black ? 'brown' : 'cream';

        return (
          <div
            key={`${square.gridValue[0]}${square.gridValue[1]} `}
            onClick={() => {
              square.readyPiece(handleClick, playerTurn);
            }}
            style={{
              height: '5vh',
              width: '5vh',
              position: 'relative',
              border: '0.1vh solid black',
              backgroundColor: color,
            }}>
            {p ? (
              <div className={p.selected ? 'highlight' : null}>
                <p.image />
              </div>
            ) : null}
          </div>
        );
      })}
      {potentialMoves
        ? potentialMoves.map((coordinate) => {
            let top = coordinate[1] * 5 + 0.1;
            let left = coordinate[0] * 5 + 0.1;
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
                    square.movePiece(
                      pieceToMove,
                      setPlayerTurn,
                      playerTurn,
                      board
                    );
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
                  top: `${top}vh`,
                  left: `${left}vh`,
                  height: '4.8vh',
                  width: '4.8vh',
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
