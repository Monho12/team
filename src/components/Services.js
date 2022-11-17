import style from "../styles/Services.module.css";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export const Services = (props) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={style.container} style={{ background: isDark ? "black" : "white" }}>
      <Container className={style.cont}>
        <div className={style.txt} style={{ color: isDark ? "white" : "black" }}>
          {props.text}
        </div>
        <div className={style.footer}>
          <img src={props.img} className={style.profile} />
          <div className={style.name}>{props.name}</div>
          <div className={style.vl}></div>
          <h5 className={style.date}>{props.date}</h5>
        </div>
        <div className={style.imgCont}>
            <div className={style.image}></div>
        </div>
      </Container>
    </div>
  );
};
