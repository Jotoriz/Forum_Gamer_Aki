import classNames from "classnames/bind";



import style from "./register.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import { Button } from "@mui/material";
import { useState } from "react";
import { faCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx =  classNames.bind(style);


function Register({clicker}) {
    const [hidePass, setHidePass] = useState(false);

    const IsHidePassword  = () =>{
        setHidePass(!hidePass)
    }

    return ( 
    <Container className={cx("Login")}>
            <Row className={cx("nd")}>
                <Col >
                    <p>Tên Tài Khoản:</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input className={cx("input")} type="text"></input>
                    Đây là tên tài khoản và sẽ hiển thị ở mỗi bài viết của bạn (Có thể đặt theo tên Minecraft để có ảnh đại diện là skin Minecraft của bạn) Tên không được dùng ký tự đặc biệt.
                </Col>
            </Row>
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
                    <Button className={cx("btn_login")} variant="contained">Đăng ký</Button>
                </Col>
            </Row>
            <Row>
                <Col className={cx("register")} >
                    <p>Bạn Chưa có tài khoản? <Button onClick={clicker}>Đăng nhập</Button></p>
                </Col>
            </Row>
        </Container>
    );
}

export default Register;