import styles from "./Game.module.css";
import Score from "../../components/Score/Score";
import MoleGrid from "../../components/MoleGrid/MoleGrid";

const Game = () => {
  return (
    <main className={styles.main}>
      <Score />
      <MoleGrid />
    </main>
  );
};

export default Game;
