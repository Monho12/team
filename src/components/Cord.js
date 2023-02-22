import styles from "../styles/Cord.module.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export const Cord = (props) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  console.log(isDark);
  return (
    <div
      className={styles.container}
      style={
        isDark
          ? {
              backgroundColor: "rgb(26, 26, 26)",
            }
          : {
              backgroundColor: "white",
            }
      }
    >
      <img src={props.image} className={styles.img} />
      <div
        className={styles.text}
        style={
          isDark
            ? {
                color: "white",
              }
            : { color: "black" }
        }
      >
        {props.text}
      </div>
      <div className={styles.tCont}>
        <div
          className={styles.text2}
          style={
            isDark
              ? {
                  color: "white",
                }
              : { color: "black" }
          }
        >
          {props.text}
        </div>
      </div>
      <div className={styles.footer}>
        <img src={props.owner.picture} className={styles.img1} />
        <div className={styles.name}>
          {props.owner.firstName} {props.owner.lastName}
        </div>
        <div className={styles.vl}></div>
        <h5 className={styles.date}>{props.publishDate}</h5>
      </div>
    </div>
  );
};
