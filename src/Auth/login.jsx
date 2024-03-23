import classNames from "classnames/bind";



import style from "./login.module.scss";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Button } from "@mui/material";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import { signin } from "../Action/authAction";

const cx =  classNames.bind(style);


function Login({clicker, signin}) {
    const [hidePass, setHidePass] = useState(false);

    const [formLogin, setFormLogin] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormLogin({ ...formLogin, [name]: value });
    };
    const IsHidePassword  = () =>{
        setHidePass(!hidePass)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        signin(formLogin);

    }
    return ( 
        <Container className={cx("Login")} onSubmit={(e) => handleSubmit(e)}>
            <Form>
            <Row className={cx("nd")}>
                <Col >
                    <p>Địa chỉ Email:</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input className={cx("input")} type="text" name="email" value={formLogin.email} onChange={handleChange}></input>
                </Col>
            </Row>
            <Row className={cx("nd")}>
                <Col >
                    <p>Mật khẩu:</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input className={cx("inputpass")} type={hidePass? "text": "password"} name="password" value={formLogin.password} onChange={handleChange}></input>
                    {!hidePass && <button className={cx("hidePass")} onClick={IsHidePassword} ><FontAwesomeIcon icon={faCheck}/></button>}
                    {hidePass &&  <button className={cx("hidePass")} onClick={IsHidePassword}><FontAwesomeIcon icon={faCircleXmark}/></button>}
                </Col>
            </Row>
            <Row>
                <Col className={cx("btn_login_Cha")}>
                    <Button className={cx("btn_login")} variant="contained" type="submit">Đăng nhập</Button>
                </Col>
            </Row>
            <Row>
                <Col className={cx("register")} >
                    <p>Bạn Chưa có tài khoản? <Button onClick={clicker}>Đăng ký</Button></p>
                </Col>
            </Row>
            </Form>

        </Container>
    );
}

export default connect(null, { signin: signin })(Login);