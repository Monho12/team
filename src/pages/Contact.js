import { Container } from "react-bootstrap";
import style from "../styles/Contact.module.css";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export const Contact = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={style.container} style={ {background : isDark ? "black" : "white"}}>
      <Container>
        <div className={style.text} style={{color : isDark ? "white" : "black"}}>Contact</div>
      </Container>
    </div>
  );
};
