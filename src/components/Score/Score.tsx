import styles from "./Score.module.css";

interface Props {
  score: number;
}

const Score: React.FC<Props> = ({ score }) => {
  return (
    <h1 className={styles.score}>
      Score: <span>{score}</span>
    </h1>
  );
};

export default Score;
