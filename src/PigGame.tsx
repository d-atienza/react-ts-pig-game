import { sample } from "lodash";
import { useState } from "react";

export default function PigGame() {
  const [lastRoll, setLastRoll] = useState<number | null>(null);

  function rollDie() {
    sample([1, 2, 3, 4]);
  }

  return (
    <div>
      {lastRoll === null ? "null" : "number"}
      <button onClick={rollDie}>😶‍🌫️</button>
    </div>
  );
}
