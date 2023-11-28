import styles from "./Score.module.css";

interface Props {
  score: number;
}

const Score: React.FC<Props> = ({ score }) => {
  return (
    <h2 className={styles.score}>
      Score: <span>{score}</span>
    </h2>
  );
};

export default Score;
