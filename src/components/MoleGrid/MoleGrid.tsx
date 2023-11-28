import { useEffect, useState } from "react";
import hole from "../../assets/hole.png";
import mole from "../../assets/mole.png";
import styles from "./MoleGrid.module.css";

const MoleGrid = () => {
  const [holesMoles, setHolesMoles] = useState<boolean[]>(
    new Array(9).fill(false)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * holesMoles.length);
      setHolesMoles(
        holesMoles.map((holeOrMole, index) =>
          index === randomIndex ? (holeOrMole = true) : holeOrMole
        )
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <ul className={styles.container}>
      {holesMoles.map((holeOrMole, index) => (
        <li className={styles.item} key={index}>
          <img
            src={holeOrMole ? mole : hole}
            alt={holeOrMole ? "Mole" : "Hole"}
            className={styles.img}
          />
        </li>
      ))}
    </ul>
  );
};

export default MoleGrid;
