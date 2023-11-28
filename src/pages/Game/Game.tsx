import { useState } from "react";
import styles from "./Game.module.css";
import Score from "../../components/Score/Score";
import MoleGrid from "../../components/MoleGrid/MoleGrid";
import Lives from "../../components/Lives/Lives";

const Game = () => {
  const [score, setScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(3);

  return (
    <main>
      <div className={styles.container}>
        <Score score={score} />
        <Lives lives={lives} />
      </div>
      <MoleGrid
        score={score}
        setScore={setScore}
        lives={lives}
        setLives={setLives}
      />
    </main>
  );
};

export default Game;
