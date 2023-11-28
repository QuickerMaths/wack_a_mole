import React from "react";
import styles from "./Lives.module.css";
import heart from "../../assets/full-heart.png";

interface Props {
  lives: number;
}

const Lives: React.FC<Props> = ({ lives }) => {
  return (
    <h2 className={styles.lives}>
      {Array.from({ length: lives }, (_, index) => index).map((index) => (
        <img src={heart} alt="heart" className={styles.img} key={index} />
      ))}
    </h2>
  );
};

export default Lives;
