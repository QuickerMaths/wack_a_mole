import { useState } from "react";
import Score from "../../components/Score/Score";
import MoleGrid from "../../components/MoleGrid/MoleGrid";

const Game = () => {
  const [score, setScore] = useState<number>(0);

  return (
    <main>
      <Score score={score} />
      <MoleGrid score={score} setScore={setScore} />
    </main>
  );
};

export default Game;
