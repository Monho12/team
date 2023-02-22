import { Container } from "react-bootstrap";
import style from "../styles/Footer.module.css";
import data from "./json/footerData.json";

export const Footer = () => {
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
            <p style={{ marginBottom: "4vh" }}>Use cases</p>
            {data.cases.map((props) => (
              <p>{props.name}</p>
            ))}
          </div>
          <div>
            <p style={{ marginBottom: "4vh" }}>Explore</p>
            {data.explore.map((props) => (
              <p>{props.name}</p>
            ))}
          </div>
          <div>
            <p style={{ marginBottom: "4vh" }}>Resources</p>
            {data.resources.map((props) => (
              <p>{props.name}</p>
            ))}
          </div>
          <div className={style.sub}>
            <div className={style.sText}>Subscribe to our newsletter</div>
            <input className={style.button} type="type" placeholder="Email" />
          </div>
        </div>
      </Container>
    </div>
  );
};
