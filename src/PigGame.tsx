import { sample } from "lodash";
import { useState } from "react";

export default function PigGame() {
  const [lastRoll, setLastRoll] = useState<number | null>(null);
  const [runningTotal, setRunningTotal] = useState<number>(0);
  const [totalScore, setTotalScore] = useState<number>(0);

  function rollDie() {
    let rollResult = sample([1, 2, 3, 4, 5, 6]);
    if (rollResult > 1) {
      setLastRoll(rollResult);
      setRunningTotal(lastRoll + runningTotal);
    } else {
      setLastRoll(rollResult);
      setRunningTotal(0);
    }
  }

  function holdTotalScore() {
    if (runningTotal != 0) {
      setTotalScore(totalScore + runningTotal);
      setRunningTotal(0);
    } else {
      setTotalScore(totalScore);
      setRunningTotal(0);
    }
  }

  return (
    <div className="gameDisplay">
      <div className="item">{lastRoll === null ? "-" : lastRoll}</div>
      <div className="item">
        <button className="rollButton" onClick={rollDie}>
          roll
        </button>
        <button className="holdButton" onClick={holdTotalScore}>
          hold
        </button>
      </div>
      <div className="item">Turn Total: {runningTotal}</div>
      <div className="item">Total Score: {totalScore}</div>
    </div>
  );
}
