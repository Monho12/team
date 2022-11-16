import { Container } from "react-bootstrap"
import style from "../styles/Login.module.css"

export const Login = () => {
    return (
        <div className={style.container}>
            <Container>
                <div className={style.text}>Log In</div>
            </Container>
        </div>
    )
}