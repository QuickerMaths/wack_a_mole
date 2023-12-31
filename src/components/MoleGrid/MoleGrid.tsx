import { useEffect, useState } from "react";
import hole from "../../assets/hole.png";
import mole from "../../assets/mole.png";
import styles from "./MoleGrid.module.css";
import { useNavigate } from "react-router";

interface Props {
  state: any;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  lives: number;
  setLives: React.Dispatch<React.SetStateAction<number>>;
}

const MoleGrid: React.FC<Props> = ({
  state,
  score,
  setScore,
  lives,
  setLives,
}) => {
  const navigate = useNavigate();
  const [moles, setMoles] = useState<boolean[]>(new Array(9).fill(false));

  function popAMole(randomIndex: number) {
    setMoles((currentMoles) => {
      return currentMoles.map((isMole, index) =>
        index === randomIndex ? (isMole = true) : isMole
      );
    });
  }

  function hideAMole(randomIndex: number) {
    setMoles((currentMoles) => {
      return currentMoles.map((isMole, index) =>
        index === randomIndex && isMole ? (isMole = false) : isMole
      );
    });
  }

  function resetGame() {
    setLives(3);
    setScore(0);
    navigate("../game-over", { state: { score } });
  }

  function wackAMole(currentIndex: number) {
    if (!moles[currentIndex] && lives) {
      setLives(lives - 1);
      return;
    } else if (!moles[currentIndex] && lives <= 0) {
      resetGame();
      return;
    }
    hideAMole(currentIndex);
    setScore(score + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * moles.length);
      popAMole(randomIndex);
      setTimeout(() => {
        hideAMole(randomIndex);
      }, (randomIndex + 1) * state.difficulty);
    }, state.difficulty);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ul className={styles.container}>
      {moles.map((holeOrMole, index) => (
        <li className={styles.item} key={index}>
          <img
            src={holeOrMole ? mole : hole}
            alt={holeOrMole ? "Mole" : "Hole"}
            className={styles.img}
            onClick={() => wackAMole(index)}
          />
        </li>
      ))}
    </ul>
  );
};

export default MoleGrid;
