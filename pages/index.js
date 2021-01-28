import Head from 'next/head';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import ChessBoard from '../components/ChessBoard';
export default function Home() {
  const [board, setBoard] = useState(new ChessBoard());
  const [pieceToMove, SetpieceToMove] = useState();

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
        <button>New Game</button>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            height: '410px',
            width: '410px',
            border: '5px solid brown',
          }}>
          {board.arrayOfSquares.map((square) => {
            let p = square.chessPeiceContained;
            let textColor = square.black ? 'white' : 'black';
            let color = square.black ? 'black' : 'white';
            return (
              <div
                key={`${square.gridValue[0]}${square.gridValue[1]} `}
                onClick={() => {
                  square.readyPiece(SetpieceToMove, pieceToMove);
                }}
                style={{
                  height: '50px',
                  width: '50px',
                  position: 'relative',
                  color: textColor,
                  backgroundColor: color,
                }}>
                {p ? p.pieceType : null}
              </div>
            );
          })}
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
