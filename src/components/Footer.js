import { Button, Container } from "react-bootstrap";
import style from "../styles/Footer.module.css";

export const Footer = () => {
  return (
    <div className={style.container}>
      <Container>
        <div className={style.dotood}>
          <div>
            {new Array(6).fill(0).map(() => (
              <p>Facebook</p>
            ))}
          </div>
          <div>
            {new Array(6).fill(0).map(() => (
              <p>Facebook</p>
            ))}
          </div>
          <div>
            {new Array(6).fill(0).map(() => (
              <p>Facebook</p>
            ))}
          </div>
          <div>
            {new Array(6).fill(0).map(() => (
              <p>Facebook</p>
            ))}
          </div>
          <div>
            <h4>Subscribe to our newsletter</h4>

            <Button
              variant="light"
              style={{ color: "#4DA0FD", border: "none" }}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
