import { sample } from "lodash";
import { useState } from "react";

export default function PigGame() {
  const [lastRoll, setLastRoll] = useState<number | null>(null);
  const [runningTotal, setRunningTotal] = useState<number>(0);
  const [playerOneScore, setplayerOneScore] = useState<number>(0);
  const [playerTwoScore, setplayerTwoScore] = useState<number>(0);
  const [playerNumber, setPlayerNumber] = useState<number>(1);

  function rollDie() {
    let rollResult = sample([1, 2, 3, 4, 5, 6]);
    setLastRoll(rollResult);
    if (rollResult > 1) {
      setRunningTotal(rollResult + runningTotal);
    } else {
      setRunningTotal(0);
      togglePlayer();
      //toggle whose turn it is
    }
  }

  function holdScore() {
    // setPotatoes(prev => [...prev, 10])
    // setplayerOneScore(x => x + runningTotal);

    if (playerNumber % 2 == 0) {
      setplayerTwoScore(playerTwoScore + runningTotal);
    } else {
      setplayerOneScore(playerOneScore + runningTotal);
    }
    togglePlayer();
    setRunningTotal(0);
  }

  function togglePlayer() {
    setPlayerNumber((x) => x + 1);
  }

  const isPlayerOnesTurn = playerNumber % 2 !== 0;

  return (
    <div className="gameDisplay">
      <div className="gameTitle">Pig Game 🐖</div>
      <div className="score-box">
        <br />
        <div className="scoreRow">
          <div className="indicator">{isPlayerOnesTurn ? "🍎" : ""}</div>
          <div className="scoreText">Player One Score: </div>
          <div className="scoreNumber">{playerOneScore}</div>
        </div>
        <div className="scoreRow">
          <div className="indicator">{isPlayerOnesTurn ? "" : "🍎"}</div>
          <div className="scoreText">Player Two Score: </div>
          <div className="scoreNumber">{playerTwoScore}</div>
        </div>
        <br />

        <div>
          Last Roll: {lastRoll === null ? "-" : lastRoll} | Turn Total:{" "}
          {runningTotal}
        </div>

        <button className="rollButton" onClick={rollDie}>
          roll
        </button>
        <button className="holdButton" onClick={holdScore}>
          hold
        </button>
      </div>
      <div className="player-turn">
        {isPlayerOnesTurn ? "Player One's Turn" : "Player Two's Turn"}
      </div>
    </div>
  );
}
