import { Container, Spinner } from "react-bootstrap";
import { Cord } from "./Cord";
import { Button } from "react-bootstrap";
import axios from "axios";
import style from "../styles/Products.module.css";
import { useState, useEffect } from "react";

export const Products = () => {
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
    <div className={style.container}>
      <Container>
        <div className={style.column}>
          {!data && <Spinner />}
          {data && data.data.map((item) => <Cord {...item} />)}
        </div>
        <div className={style.button}>
          <Button>Next</Button>
        </div>
      </Container>
    </div>
  );
};
