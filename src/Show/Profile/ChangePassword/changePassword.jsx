import { Col, Container, Row } from "react-bootstrap";
import classNames from "classnames/bind";

import styles from "./changePassword.module.scss"
import { useState } from "react";
import { Button } from "@mui/material";
import { ChangePasswordUser } from "../../../Action/userAction";

const cx = classNames.bind(styles);

function ChangePassword() {
    const [passwords, setPasswords] = useState({
        oldPassword: "",
        newPassword: ""
    });
    const [rePassword, setrePassword] = useState("")

    const token = localStorage.getItem('token');
    const handleRePasswordChange = (event) => {
        setrePassword(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPasswords((prevPasswords) => ({
            ...prevPasswords,
            [event.target.name]: event.target.value
        }));
    };
    
    const submit = () => {
        ChangePasswordUser(token, passwords, rePassword);
    }
    return ( 
        <Container className={cx("ChangePassword")}>
            <Row>
                <Col>
                    <h4>Đổi mật khẩu</h4>
                </Col>
            </Row>
            <Row className={cx("form")}>
                <Col xl='4'><span>Mật khẩu cũ</span></Col>
                    <Col >
                        
                        <input type="password" className={cx("input_email")} name='oldPassword'  value={passwords.oldPassword} onChange={handlePasswordChange}></input>
                    </Col>
                </Row>
                <Row className={cx("form")}> 
                    <Col xl='4'><span>Mật khẩu mới</span></Col>
                    <Col >
                        
                        <input type="password" className={cx("input_userName")} name='newPassword' value={passwords.newPassword} onChange={handlePasswordChange}></input>
                    </Col>
                </Row>
                <Row className={cx("form")}> 
                    <Col xl='4'><span>Lặp lại mật khẩu mới</span></Col>
                    <Col >
                        
                        <input type="password" className={cx("input_userName")} name='rePassword' value={rePassword} onChange={handleRePasswordChange}></input>
                    </Col>
                </Row>
                <Row>
                    <Col className={cx("success")}>
                        <Button variant="contained" color="success" onClick={submit}>Hoàn Thành</Button>
                    </Col>
                </Row>
        </Container>
     );
}

export default ChangePassword;