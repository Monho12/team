import { Container } from "react-bootstrap";
import style from "../styles/Getaccess.module.css";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export const Getaccess = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div
      className={style.container}
      style={{ background: isDark ? "black" : "white" }}
    >
      <Container>
        <div
          className={style.text}
          style={{ color: isDark ? "white" : "black" }}
        >
          Get Access
        </div>
      </Container>
    </div>
  );
};
