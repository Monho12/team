import { Container, Spinner } from "react-bootstrap";
import style from "../styles/Services.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { SmallFoot } from "./SmallFoot";

export const Services = (props) => {
  const [data, setData] = useState(null);
  const baseUrl = "https://dummyapi.io/data/v1/";

  useEffect(() => {
    axios
      .get(baseUrl + "post?limit=1&psge=0", {
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
        <div className={style.txtCont}>
          <div className={style.txt}>{props.text}</div>
          <div>
            {!data && <Spinner />}
            {data && data.data.map((item) => <SmallFoot {...item} />)}
          </div>
        </div>
        {/* <div>
            <div className={style.crowd}></div>
        </div> */}
      </Container>
    </div>
  );
};
