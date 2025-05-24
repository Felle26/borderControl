import "./GameEndscreen.css";
import { useEffect, useState } from "react";

export function GameEndscreen({ correctGuesses, faultyGuesses, timePlayed, onPlayAgain }) {
  const [showStats, setShowStats] = useState(false);

  useEffect(() => {
    // Trigger animation after component mount
    const timer = setTimeout(() => setShowStats(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const calculateAccuracy = () => {
    const total = correctGuesses + faultyGuesses;
    if (total === 0) return 0;
    return Math.round((correctGuesses / total) * 100);
  };

  return (
    <div className="game-end-screen">
      <div className="end-screen-content">
        <h1 className="game-over-title">Finished</h1>

        <div className={`stats-container ${showStats ? "show" : ""}`}>
          <div className="stat-box time-played">
            <h3>Time Played</h3>
            <div className="stat-value">{formatTime(timePlayed)}</div>
          </div>

          <div className="stat-box correct-guesses">
            <h3>Correct Guesses</h3>
            <div className="stat-value">{correctGuesses}</div>
          </div>

          <div className="stat-box wrong-guesses">
            <h3>Wrong Guesses</h3>
            <div className="stat-value">{faultyGuesses}</div>
          </div>

          <div className="stat-box accuracy">
            <h3>Accuracy</h3>
            <div className="stat-value">{calculateAccuracy()}%</div>
          </div>
        </div>

        <button className="play-again-button" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
}
