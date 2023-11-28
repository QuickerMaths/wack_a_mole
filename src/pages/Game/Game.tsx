import { useState } from "react";
import styles from "./Game.module.css";
import Score from "../../components/Score/Score";
import MoleGrid from "../../components/MoleGrid/MoleGrid";
import Lives from "../../components/Lives/Lives";
import { useLocation } from "react-router";

const Game = () => {
  const { state } = useLocation();
  const [score, setScore] = useState<number>(0);
  const [lives, setLives] = useState<number>(state.lives);

  return (
    <main>
      <div className={styles.container}>
        <Score score={score} />
        <Lives lives={lives} />
      </div>
      <MoleGrid
        state={state}
        score={score}
        setScore={setScore}
        lives={lives}
        setLives={setLives}
      />
    </main>
  );
};

export default Game;
