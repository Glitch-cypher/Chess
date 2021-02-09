import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import ChessBoard from '../libs/classes/ChessBoard';
import Board from '../components/Board';
import calculatePossibleMoves from '../libs/functions/calculatePossibleMoves';

export default function Home() {
  const [board, setBoard] = useState(new ChessBoard());
  const [pieceToMove, setPieceToMove] = useState();
  const [playerTurn, setPlayerTurn] = useState('White');
  const [potentialMoves, setPotentialMoves] = useState([]);

  useEffect(() => {
    if (board.arrayOfSquares) {
      calculatePossibleMoves(board);
    }
  }, [board]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Chess Battle</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Lets play Chess!</h1>
        <div className={styles.body}>
          <div className={styles.info}>
            <button
              className={styles.button}
              onClick={() => {
                setBoard(new ChessBoard());
                setPieceToMove();
                setPotentialMoves([]);
                setPlayerTurn('White');
                calculatePossibleMoves(board);
              }}>
              New Game
            </button>
            <p className={styles.description}>
              Get started by clicking on the piece you want to move.
            </p>
            <p>
              <b>{playerTurn}</b>'s turn to move
            </p>
            {pieceToMove ? (
              <h1>{pieceToMove.chessPieceContained.pieceType}</h1>
            ) : (
              <h1>no piece selected</h1>
            )}
          </div>
          <Board
            className={styles.board}
            board={board}
            playerTurn={playerTurn}
            pieceToMove={pieceToMove}
            setPlayerTurn={setPlayerTurn}
            setPieceToMove={setPieceToMove}
            potentialMoves={potentialMoves}
            setPotentialMoves={setPotentialMoves}
          />
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.linkedin.com/in/charles-a-h-chandler/"
          target="_blank"
          rel="noopener noreferrer">
          Created by Charlie
        </a>
      </footer>
    </div>
  );
}
