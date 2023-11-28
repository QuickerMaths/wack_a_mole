import { useNavigate } from "react-router";
import Select from "react-select";
import styles from "./Home.module.css";
import { FormEvent, useState } from "react";

const optionsDifficulty = [
  { value: 1000, label: "Easy" },
  { value: 750, label: "Medium" },
  { value: 500, label: "Hard" },
];

const optionsLives = [
  { value: 1, label: "1" },
  { value: 3, label: "3" },
  { value: 5, label: "5" },
];

const Home = () => {
  const navigate = useNavigate();

  const [gameSettings, setGameSettings] = useState<{
    difficulty: number | undefined;
    lives: number | undefined;
  }>({
    difficulty: undefined,
    lives: undefined,
  });
  const [errors, setErrors] = useState<{
    difficulty: string | undefined;
    lives: string | undefined;
  }>({
    difficulty: undefined,
    lives: undefined,
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!gameSettings.difficulty) {
      setErrors({ ...errors, difficulty: "Choose difficulty" });
    } else if (!gameSettings.lives) {
      setErrors({ ...errors, lives: "Chose number of lives" });
    } else {
      setErrors({
        difficulty: undefined,
        lives: undefined,
      });
      navigate("wacking-time", { state: gameSettings });
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Difficulty
        <Select
          options={optionsDifficulty}
          className={styles.select}
          onChange={(selected) =>
            setGameSettings({ ...gameSettings, difficulty: selected?.value })
          }
        />
      </label>
      {errors.difficulty && <p>{errors.difficulty}</p>}
      <label className={styles.label}>
        Lives
        <Select
          options={optionsLives}
          className={styles.select}
          onChange={(selected) =>
            setGameSettings({ ...gameSettings, lives: selected?.value })
          }
        />
      </label>
      {errors.lives && <p>{errors.lives}</p>}
      <button className={styles.button}>Start Wacking Moles!</button>
    </form>
  );
};

export default Home;
