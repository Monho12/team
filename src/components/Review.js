import styles from "../styles/Review.module.css";
import { FaStar } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export const Review = (props) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  console.log(isDark);

  const stars = Array(5).fill(0);
  for (let i = 0; i < props.star; i++) {
    stars[i] = 1;
  }

  return (
    <div
      className={styles.Container}
      style={
        isDark ? { backgroundColor: "white" } : { backgroundColor: "black" }
      }
    >
      <div className={styles.stars}>
        {stars.map((item) => (
          <FaStar className={styles["shar" + item]} />
        ))}
      </div>
      <div className={styles.t}>
        <div
          className={styles.text}
          style={isDark ? { color: "black" } : { color: "white" }}
        >
          {props.text}
        </div>
      </div>
      <div className={styles.profile}>
        <img src={props.img}></img>
        <h4  style={isDark ? { color: "black" } : { color: "white" }}>
          {props.name}
        </h4>
      </div>
    </div>
  );
};
