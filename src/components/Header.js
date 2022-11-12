import { Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "./ThemeProvider";
import style from "../styles/Header.module.css";
import { useContext } from "react";

export const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  console.log(isDark);

  return (
    <div
      className={style.container}
      style={{
        background:
          (useLocation().pathname == "/" || "/") && isDark ? "black" : "white",
      }}
    >
      <Container>
        <div className={style.dotood}>
          <Link to="/" className={isDark ? style.logo : style.logo2}></Link>
          <div className={style.links}>
            <Button
              onClick={toggleTheme}
              // className={useLocation().pathname != "/" ? style.btn2 : style.btn}
            >
              {isDark ? "Light" : "Dark"}
            </Button>
            <Link
              to="/products"
              style={isDark ? { color: "white" } : { color: "black" }}
            >
              Products
            </Link>
            <Link
              to="/services"
              style={isDark ? { color: "white" } : { color: "black" }}
            >
              Services
            </Link>
            <Link
              to="/contact"
              style={isDark ? { color: "white" } : { color: "black" }}
            >
              Contact
            </Link>
            <Link
              to="/login"
              style={isDark ? { color: "white" } : { color: "black" }}
            >
              Login
            </Link>
            <Link
              to="/getaccess"
              className={isDark ? style.getacc : style.getacc2}
            >
              Get Access
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
