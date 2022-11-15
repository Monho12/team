import { Container, Button } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { ThemeContext } from "./ThemeProvider";
import style from "../styles/Header.module.css";
import { useContext, useState } from "react";

export const Header = () => {
  window.addEventListener("scroll", setFix);
  const [backG, setBackG] = useState(false);

  function setFix() {
    if (window.scrollY <= 0) {
      setBackG(false);
    } else {
      setBackG(true);
    }
  }
  const { isDark, toggleTheme } = useContext(ThemeContext);

  window.addEventListener("scroll", setFix);
  return (
    <div className={(useLocation().pathname === "/" || "/") && backG ? style.container : style.containerB}>
      
      <Container>
        <div className={style.dotood}>
          <Link to="/" className={useLocation().pathname === "/" || backG || isDark ? style.logo : style.logo2}></Link>
          <div className={style.links}>
            <Button onClick={toggleTheme} className={style.btn}>{isDark ? "☀️" : "🌙"}</Button>
            <Link
              to="/products"
              style={ useLocation().pathname === "/" || backG || isDark ? {color: "white" } : { color: "black" }}
            >
              Blogs
            </Link>
            <Link
              to="/services"
              style={useLocation().pathname === "/" || backG || isDark ? {color: "white" } : { color: "black" }}
            >
              Services
            </Link>
            <Link
              to="/contact"
              style={useLocation().pathname === "/" || backG || isDark ? {color: "white" } : { color: "black" }}
            >
              Contact
            </Link>
            <Link
              to="/login"
              style={useLocation().pathname === "/" || backG || isDark ? {color: "white" } : { color: "black" }}
            >
              Login
            </Link>
            <Link
              to="/getaccess"
              className={ useLocation().pathname === "/" || backG || isDark ? style.getacc : style.getacc2}
            >
              Get Access
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};
