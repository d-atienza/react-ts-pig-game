import { sample } from "lodash";
import { useState } from "react";

export default function PigGame() {
  const [lastRoll, setLastRoll] = useState<number | null>(null);
  const [runningTotal, setRunningTotal] = useState<number>(0);
  const [playerOneScore, setplayerOneScore] = useState<number>(0);

  function rollDie() {
    let rollResult = sample([1, 2, 3, 4, 5, 6]);
    setLastRoll(rollResult);
    if (rollResult > 1) {
      setRunningTotal(rollResult + runningTotal);
    } else {
      setRunningTotal(0);
      //toggle whose turn it is
    }
  }

  function holdScore() {
    // setPotatoes(prev => [...prev, 10])
    // setplayerOneScore(x => x + runningTotal);

    setplayerOneScore(playerOneScore + runningTotal);
    setRunningTotal(0);
  }

  return (
    <div className="gameDisplay">
      <div className="gameTitle">Pig Game 🐖</div>
      <div className="item">Player One Score: {playerOneScore}</div>
      <div className="item">Player Two Score: {playerOneScore}</div>

      <div className="item">
        <center>
          <div className="item">
            Turn Total: {runningTotal} | Last Roll:{" "}
            {lastRoll === null ? "-" : lastRoll}
          </div>
        </center>
        <button className="rollButton" onClick={rollDie}>
          roll
        </button>
        <button className="holdButton" onClick={holdScore}>
          hold
        </button>
      </div>
    </div>
  );
}
