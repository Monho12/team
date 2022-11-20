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
        <div className={style.footer}  style={{ color: isDark ? "white" : "black" }}>
          <img src={props.img} className={style.profile} />
          <div className={style.name}>{props.name}</div>
          <div className={style.vl}></div>
          <h5 className={style.date}>{props.date}</h5>
        </div>
        <div className={style.imgCont}  style={{ color: isDark ? "white" : "black" }}>
            <div className={style.image}></div>
        </div>
        <div className={style.tCont}  style={{ color: isDark ? "white" : "black" }}>
          <div>{props.text2}</div><br/>
          <div>{props.text3}</div><br/>
          <div>{props.text4}</div><br/>
          <div>{props.text5}</div><br/>
          <div>{props.text6}</div>
          <div>{props.text6}</div>
          <div>{props.text6}</div>
          <div>{props.text6}</div>
        </div>
        <div className={style.footer1}  style={{ color: isDark ? "white" : "black" }}>
          <img src={props.img} className={style.profile} />
          <div>
            <div className={style.name2}>{props.text7}</div>
            <div className={style.name1}>{props.name}</div>
            <div className={style.name3}>{props.text8}</div>
          </div>
        </div>
        <hr className={style.line}/>
        <div className={style.join}>Join the conversation</div>
        <div className={style.tCont1}>
          <img src={props.img} className={style.profile} />
          <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Comments" className={style.input}></textarea>
          {/* <input type="text" placeholder="Comments" className={style.input}/> */}
        </div>
      </Container>
    </div>
  );
};
