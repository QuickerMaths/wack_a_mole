import styles from "./Score.module.css";

const Score = () => {
  return (
    <h1 className={styles.score}>
      Score: <span>0</span>
    </h1>
  );
};

export default Score;
