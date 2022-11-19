import { Button, Container } from "react-bootstrap";
import style from "../styles/Footer.module.css";
import data from "./footerData.json";

export const Footer = () => {
  console.log(data);
  return (
    <div className={style.container}>
      <Container>
        <div className={style.dotood}>
          <div>
            <div className={style.logo} />
            {data.links.map((props) => (
              <p>{props.name}</p>
            ))}
          </div>
          <div>
            <div style={{ marginBottom: "4vh" }}>Use cases</div>
            {data.cases.map((props) => (
              <p>{props.name}</p>
            ))}
          </div>
          <div>
            <div style={{ marginBottom: "4vh" }}>Explore</div>
            {data.explore.map((props) => (
              <p>{props.name}</p>
            ))}
          </div>
          <div>
            <div style={{ marginBottom: "4vh" }}>Resources</div>
            {data.resources.map((props) => (
              <p>{props.name}</p>
            ))}
          </div>
          <div>
            <h5>Subscribe to our newsletter</h5>
            <input className={style.button} type="type" placeholder="Email" />
          </div>
        </div>
      </Container>
    </div>
  );
};
