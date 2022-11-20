import { Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "./ThemeProvider";
import style from "../styles/Header.module.css";
import { useContext, useState } from "react";

export const Header = () => {
  const [backG, setBackG] = useState(false);

  function Fix() {
    if (window.scrollY <= 0) return setBackG(false);
    else return setBackG(true);
  }
  window.addEventListener("scroll", Fix);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={
        (useLocation().pathname === "/" || "/") && backG
          ? style.container
          : style.containerB
      }
    >
      <Container>
        <div className={style.dotood}>
          <Link
            to="/"
            className={
              useLocation().pathname === "/" || backG || isDark
                ? style.logo
                : style.logo2
            }
          ></Link>
          <div className={style.links}>
            {/* <Button onClick={toggleTheme} className={style.btn}>{isDark ? "☀️" : "🌙"}</Button> */}
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={toggleTheme}
              />
            </div>
            <Link
              to="/products"
              style={
                useLocation().pathname === "/" || backG || isDark
                  ? { color: "white" }
                  : { color: "black" }
              }
            >
              Blogs
            </Link>
            <Link
              to="/services"
              style={
                useLocation().pathname === "/" || backG || isDark
                  ? { color: "white" }
                  : { color: "black" }
              }
            >
              Services
            </Link>
            <Link
              to="/contact"
              style={
                useLocation().pathname === "/" || backG || isDark
                  ? { color: "white" }
                  : { color: "black" }
              }
            >
              Contact
            </Link>
            <Link
              to="/login"
              style={
                useLocation().pathname === "/" || backG || isDark
                  ? { color: "white" }
                  : { color: "black" }
              }
            >
              Login
            </Link>
            <Link
              to="/getaccess"
              className={
                useLocation().pathname === "/" || backG || isDark
                  ? style.getacc
                  : style.getacc2
              }
            >
              Get Access
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
