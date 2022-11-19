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
        isDark
          ? {
              backgroundColor: "black", boxShadow : "0px 0px 60px 5px rgba(187, 187, 187, 0.75)"}
          : { backgroundColor: "white" }
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
          style={isDark ? { color: "white" } : { color: "black" }}
        >
          {props.text}
        </div>
      </div>
      <div className={styles.profile}>
        <img src={props.img}></img>
        <div style={isDark ? { color: "white" } : { color: "black" }}>
          {props.name}
        </div>
      </div>
    </div>
  );
};
