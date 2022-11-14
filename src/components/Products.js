import { Container, Spinner } from "react-bootstrap";
import { Cord } from "./Cord";
import { Button } from "react-bootstrap";
import axios from "axios";
import style from "../styles/Products.module.css";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export const Products = (props) => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  console.log(isDark);
  const [data, setData] = useState(null);
  const baseUrl = "https://dummyapi.io/data/v1/";

  useEffect(() => {
    axios
      .get(baseUrl + "post", {
        headers: {
          "app-id": "636f2fbfe8d0ff0d223fc543",
        },
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      className={style.container}
      style={
        isDark
          ? {
              backgroundColor: "black",
            }
          : { backgroundColor: "white" }
      }
    >
      <Container>
        <div className={style.textCont}>
          <div
            className={style.text}
            style={isDark ? { color: "white" } : { color: "black" }}
          >
            {props.text}
          </div>
          <div className={style.desc}>{props.desc}</div>
        </div>
        <div className={style.column}>
          {!data && <Spinner />}
          {data && data.data.map((item) => <Cord {...item} key={item}/>)}
        </div>
        <div className={style.button}>
          <Button variant="dark" className={style.btn}>
            Next
          </Button>
        </div>
      </Container>
    </div>
  );
};
