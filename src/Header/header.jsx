import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBell, faSearch, faEllipsisV, faKey, faIdCard, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from "./header.module.scss";
import Logo from "../img/Logo.jpg"
import { Link } from 'react-router-dom';
import Login from '../Auth/login';
import Register from '../Auth/register';
import { useDispatch } from 'react-redux';
import { logout } from '../Action/authAction';

const cx = classNames.bind(styles)

function Header() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const dispath = useDispatch();

    const handleLoginClick = () => {
        setShowLogin(true);
    };
    const openRegister = () => {
        setShowLogin(false);
        setShowRegister(true);
    }
    const openLogin = () => {
        setShowLogin(true);
        setShowRegister(false);
    }
    const closeAuth = () => {
        setShowLogin(false);
        setShowRegister(false);
    };
    const handleRegisterClick = () => {
        setShowRegister(true);
    };

    const Logout = () =>{
        dispath(logout());
    }
    console.log(localStorage.getItem("user"));
    return ( 
        <Navbar className={cx("header")}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} width="30" height="30" alt="" />
                </Navbar.Brand>
                <Nav className={cx("swicher")}>
                    <Nav className={cx("hover")}>HOME</Nav>
                    <Link to="/"><Nav className={cx("hover", window.location.pathname === '/'? "DienDan" : "" )}>DIỄN ĐÀN</Nav></Link>
                    <Nav className={cx("hover")}>TÀI NGUYÊN</Nav>
                </Nav>
                <div className={cx("right")}>
                    {
                    !localStorage.getItem('authenticate') &&
                    <Row>
                        <Col xl='7' className={cx("login")} onClick={handleLoginClick}>
                                <FontAwesomeIcon icon={faKey} />
                                <span>Đăng nhập</span>
                        </Col>
                        {showLogin && (
                            <div className={cx("popupLogin")}>
                                <Login clicker={openRegister}/>
                            </div>
                            )}
                            {showRegister && (
                            <div className={cx("dong-background")} onClick={closeAuth}></div>
                            )}
                            {showLogin&& (
                            <div className={cx("dong-background")} onClick={closeAuth}></div>
                            )}
                        <Col xl='5' className={cx("register")} onClick={handleRegisterClick}>
                                <FontAwesomeIcon icon={faIdCard} />
                                <span>Đăng ký</span>
                        </Col>
                            {showRegister && (
                                <div className={cx("popupRegister")}>
                                    <Register clicker={openLogin}/>
                                </div>
                            )}
                    </Row>
                    }
                    {
                    localStorage.getItem('authenticate') && 
                     <div className={cx("right")}>
                        <image src={localStorage.getItem("user").avt} alt="Avatar"></image>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <FontAwesomeIcon icon={faBell} />
                        <FontAwesomeIcon icon={faSearch} />
                        <FontAwesomeIcon icon={faArrowRightFromBracket} onClick={Logout}/>
                    </div>
                    }
                </div>

            </Container>
        </Navbar>
        
     );
}

export default Header;