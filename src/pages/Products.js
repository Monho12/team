import { Container, Spinner } from "react-bootstrap";
import { Cord } from "../components/Cord";
import { Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";
import axios from "axios";
import style from "../styles/Products.module.css";

export const Products = (props) => {
  const { isDark } = useContext(ThemeContext);

  const [page, setPage] = useState(0);
  const [limit, setlimit] = useState(9);

  const nextPage = () => {
    setData(null);
    setPage((prev) => prev + 1);
  };
  const prevPage = () => {
    setData(null);
    setPage((prev) => {
      if (prev > 1) {
        return prev - 1;
      }
    });
  };

  console.log(isDark);
  const [data, setData] = useState(null);
  const baseUrl = "https://dummyapi.io/data/v1/";

  useEffect(() => {
    axios
      .get(baseUrl + `post?limit=${limit}&page=${page}`, {
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
  }, [page, limit]);

  return (
    <div
      className={style.container}
      style={
        isDark ? { backgroundColor: "black" } : { backgroundColor: "white" }
      }
    >
      <Container className={style.cont}>
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
          {data && data.data.map((item) => <Cord {...item} />)}
        </div>
        <div className={style.button}>
          <Button variant="dark" className={style.btn} onClick={prevPage}>
            Prev
          </Button>
          <Button variant="dark" className={style.btn} onClick={nextPage}>
            Next
          </Button>
        </div>
      </Container>
    </div>
  );
};
