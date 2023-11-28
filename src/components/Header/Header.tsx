import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>Wack A Mole</h1>
    </header>
  );
};

export default Header;
