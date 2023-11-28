import { useLocation } from "react-router";
import styles from "./GameOver.module.css";
import { useNavigate } from "react-router";

const GameOver = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>GameOver</h2>
      <p className={styles.message}>
        Congrats! You managed to wack{" "}
        <span className={styles.span}>{state.score}</span> moles!
      </p>
      <button className={styles.button} onClick={() => navigate("../")}>
        Try again
      </button>
    </div>
  );
};

export default GameOver;
