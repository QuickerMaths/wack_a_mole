import { useNavigate } from "react-router";
import styles from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <button className={styles.button} onClick={() => navigate("wacking-time")}>
      Start Wacking Moles!
    </button>
  );
};

export default Home;
