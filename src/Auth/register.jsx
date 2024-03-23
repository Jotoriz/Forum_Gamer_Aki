import classNames from "classnames/bind";



import style from "./register.module.scss";
import { Col, Container, Form, Row } from "react-bootstrap";
import { Button } from "@mui/material";
import { useState } from "react";
import { faCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect} from "react-redux";
import { signup } from "../Action/authAction";

const cx =  classNames.bind(style);


function Register({clicker, signup}) {
    const [hidePass, setHidePass] = useState(false);
  const [formRegister, setFormRegister] = useState({
    email: "",
    username: "",
    password: "",
  });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormRegister({ ...formRegister, [name]: value });
    };

    const IsHidePassword  = () =>{
        setHidePass(!hidePass)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        signup(formRegister);
    }
    return ( 
    <Container className={cx("Login")}>
        <Form onSubmit={(e) => handleSubmit(e)}> 
            <Row className={cx("nd")}>
                <Col >
                    <p>Tên Tài Khoản:</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input className={cx("input")} name="username" value={formRegister.username} onChange={handleChange} type="text" />
                    Đây là tên tài khoản và sẽ hiển thị ở mỗi bài viết của bạn (Có thể đặt theo tên Minecraft để có ảnh đại diện là skin Minecraft của bạn) Tên không được dùng ký tự đặc biệt.
                </Col>
                </Row>
                <Row className={cx("nd")}>
                <Col>
                    <p>Địa chỉ Email:</p>
                </Col>
                </Row>
                <Row>
                <Col>
                    <input className={cx("input")} name="email" value={formRegister.email} onChange={handleChange}  type="text" />
                </Col>
                </Row>
                <Row className={cx("nd")}>
                <Col>
                    <p>Mật khẩu:</p>
                </Col>
                </Row>
                <Row>
                <Col>
                    <input className={cx("inputpass")} name="password" type={hidePass ? "text" : "password"} value={formRegister.password} onChange={handleChange} ></input>
                    {!hidePass && <button className={cx("hidePass")} onClick={IsHidePassword}><FontAwesomeIcon icon={faCheck} /></button>}
                    {hidePass && <button className={cx("hidePass")} onClick={IsHidePassword}><FontAwesomeIcon icon={faCircleXmark} /></button>}
                </Col>
                </Row>
            <Row>
                <Col className={cx("btn_login_Cha")}>
                    <Button className={cx("btn_login")} variant="contained" type="submit" >Đăng ký</Button>
                </Col>
            </Row>
            <Row>
                <Col className={cx("register")} >
                    <p>Bạn Chưa có tài khoản? <Button onClick={clicker}>Đăng nhập</Button></p>
                </Col>
            </Row>
            </Form>
        </Container>
    );
}

export default connect(null, { signup: signup })(Register);