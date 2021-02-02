import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import ChessBoard from '../libs/classes/ChessBoard';
import Board from '../components/Board';
export default function Home() {
  const [board, setBoard] = useState(new ChessBoard());
  const [pieceToMove, setPieceToMove] = useState();
  const [playerTurn, setPlayerTurn] = useState('White');
  const [potentialMoves, setPotentialMoves] = useState([]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Lets play Chess!</h1>

        <p className={styles.description}>
          Get started by clicking on the piece you want to move.
        </p>
        <p>{playerTurn}'s turn to move</p>
        <button
          onClick={() => {
            setBoard(new ChessBoard());
            setPieceToMove();
            setPotentialMoves([]);
            setPlayerTurn('White');
          }}>
          New Game
        </button>
        {pieceToMove ? (
          <h1>{pieceToMove.chessPieceContained.pieceType}</h1>
        ) : (
          <h1>no piece selected</h1>
        )}
        <Board
          board={board}
          playerTurn={playerTurn}
          pieceToMove={pieceToMove}
          setPlayerTurn={setPlayerTurn}
          setPieceToMove={setPieceToMove}
          potentialMoves={potentialMoves}
          setPotentialMoves={setPotentialMoves}
        />
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
