import hole from "../../assets/hole.png";
import mole from "../../assets/mole.png";
import styles from "./MoleGrid.module.css";

const MoleGrid = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.item}>
        <img src={hole} alt="Hole" className={styles.img} />
      </li>
      <li className={styles.item}>
        <img src={hole} alt="Hole" className={styles.img} />
      </li>
      <li className={styles.item}>
        <img src={hole} alt="Hole" className={styles.img} />
      </li>
      <li className={styles.item}>
        <img src={hole} alt="Hole" className={styles.img} />
      </li>
      <li className={styles.item}>
        <img src={hole} alt="Hole" className={styles.img} />
      </li>
      <li className={styles.item}>
        <img src={hole} alt="Hole" className={styles.img} />
      </li>
      <li className={styles.item}>
        <img src={hole} alt="Hole" className={styles.img} />
      </li>
      <li className={styles.item}>
        <img src={hole} alt="Hole" className={styles.img} />
      </li>
      <li className={styles.item}>
        <img src={hole} alt="Hole" className={styles.img} />
      </li>
    </ul>
  );
};

export default MoleGrid;
