import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from "../styles/Home.module.css";
import { ThemeContext } from "./ThemeProvider";
import { useContext, useEffect, useState } from "react";
import backs from "./feedbacks.json";
import { Review } from "./Review";
import img from "../assets/unknown.png";

export const Home = (props) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [index, setIndex] = useState(0);

  const goRight = () => {
    if (index < 9) {
      setIndex((index) => index + 1);
    }
  };
  const goLeft = () => {
    if (index != 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className={style.container}>
        <Container>
          <div className={style.textCont}>
            <div className={style.text}>{props.text}</div>
            <div className={style.desc}>{props.desc}</div>
          </div>
          <div className={style.inpB}>
            <input
              type="text"
              placeholder="Email"
              className={style.input}
            ></input>
            <Button variant="primary" className={style.button}>
              Get early access
            </Button>
          </div>
        </Container>
      </div>
      <div
        className={style.container2}
        style={
          isDark ? { backgroundColor: "black" } : { backgroundColor: "white" }
        }
      >
        <Container>
          <div className={style.textCont2}>
            <div
              className={style.text2}
              style={isDark ? { color: "white" } : { color: "black" }}
            >
              {props.text2}
            </div>
            <div
              className={style.desc2}
              style={isDark ? { color: "white" } : { color: "black" }}
            >
              {props.desc2}
            </div>
            <Link to="/learnmore" style={{ color: "#4DA0FD" }}>
              Learn more
            </Link>
            <div className={style.image}>
              <div className={style.not}></div>
              <div className={style.ring}></div>
              <div className={style.sched}></div>
            </div>
          </div>
        </Container>
      </div>
      <div
        className={style.container3}
        style={
          isDark ? { backgroundColor: "black" } : { backgroundColor: "white" }
        }
      >
        <Container>
          <div className={style.image2}></div>
          <div className={style.textCont3}>
            <div
              className={style.text2}
              style={isDark ? { color: "white" } : { color: "black" }}
            >
              {props.text3}
            </div>
            <div
              className={style.desc2}
              style={isDark ? { color: "white" } : { color: "black" }}
            >
              {props.desc3}
            </div>
            <Link to="/learnmore" style={{ color: "#4DA0FD" }}>
              Learn more
            </Link>
          </div>
        </Container>
      </div>
      <div
        className={style.container4}
        style={
          isDark ? { backgroundColor: "black" } : { backgroundColor: "white" }
        }
      >
        <Container>
          <div className={style.textCont2}>
            <div
              className={style.text2}
              style={isDark ? { color: "white" } : { color: "black" }}
            >
              {props.text4}
            </div>
            <div
              className={style.desc2}
              style={isDark ? { color: "white" } : { color: "black" }}
            >
              {props.desc4}
            </div>
            <Link to="/learnmore" style={{ color: "#4DA0FD" }}>
              Learn more
            </Link>
            <div className={style.image3}></div>
          </div>
        </Container>
      </div>

      <div
        className={style.section69}
        style={
          isDark ? { backgroundColor: "black" } : { backgroundColor: "white" }
        }
      >
        <div
          className={style.word}
          style={
            isDark
              ? { backgroundColor: "black", color: "white" }
              : { backgroundColor: "white", color: "black" }
          }
        >
          What people say about us
        </div>
        <Container>
          <div
            className={style.container69}
            style={{
              transform: `translateX(${-10 * index}%)`,
              transition: "300ms",
            }}
          >
            {backs.map(({ text, name, star }, index) => {
              return (
                <Review
                  text={text}
                  name={name}
                  star={star}
                  img={img}
                  index={index}
                />
              );
            })}
          </div>
        </Container>
      </div>
      <div className={style.btnCont}>
        <div className={style.buttons}>
          <Button onClick={goLeft}>Left</Button>
          <Button onClick={goRight}>Right</Button>
        </div>
      </div>
    </div>
  );
};

// 4DA0FD
