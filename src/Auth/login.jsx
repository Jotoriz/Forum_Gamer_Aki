import classNames from "classnames/bind";



import style from "./login.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Button, ButtonBase } from "@mui/material";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const cx =  classNames.bind(style);


function Login({clicker}) {
    const [hidePass, setHidePass] = useState(false);

    const IsHidePassword  = () =>{
        setHidePass(!hidePass)
    }
    
    return ( 
        <Container className={cx("Login")}>
            <Row className={cx("nd")}>
                <Col >
                    <p>Địa chỉ Email:</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input className={cx("input")} type="text"></input>
                </Col>
            </Row>
            <Row className={cx("nd")}>
                <Col >
                    <p>Mật khẩu:</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input className={cx("inputpass")} type={hidePass? "text": "password"}></input>
                    {!hidePass && <button className={cx("hidePass")} onClick={IsHidePassword} ><FontAwesomeIcon icon={faCheck}/></button>}
                    {hidePass &&  <button className={cx("hidePass")} onClick={IsHidePassword}><FontAwesomeIcon icon={faCircleXmark}/></button>}
                </Col>
            </Row>
            <Row>
                <Col className={cx("btn_login_Cha")}>
                    <Button className={cx("btn_login")} variant="contained">Đăng nhập</Button>
                </Col>
            </Row>
            <Row>
                <Col className={cx("register")} >
                    <p>Bạn Chưa có tài khoản? <Button onClick={clicker}>Đăng ký</Button></p>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;