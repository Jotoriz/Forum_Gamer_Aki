import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBell, faSearch, faKey, faIdCard, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from "./header.module.scss";
import Logo from "../img/Logo.jpg"
import { Link } from 'react-router-dom';
import Login from '../Auth/login';
import Register from '../Auth/register';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../Action/authAction';
import { getUser } from '../Action/userAction';
import Profile from '../Show/Profile/profile';
import { api } from '../api';

const cx = classNames.bind(styles)

function Header() {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [showProfile, setShowProfile] = useState(false);
    const [user, setUser] = useState(null);
    const token = localStorage.getItem('token');

    const dispatch = useDispatch();


    const handleLoginClick = () => {
        setShowLogin(true);
        document.body.style.overflow = 'hidden';
    };
    const handleProfileClick = () => {
        setShowProfile(true);
        document.body.style.overflow = 'hidden';
    };
    const openRegister = () => {
        setShowLogin(false);
        setShowRegister(true);
        document.body.style.overflow = 'hidden';
    }
    const openLogin = () => {
        setShowLogin(true);
        setShowRegister(false);
        document.body.style.overflow = 'hidden';
    }
    const handleRegisterClick = () => {
        setShowRegister(true);
        document.body.style.overflow = 'hidden';
    };
    const close = () => {
        setShowLogin(false);
        setShowRegister(false);
        setShowProfile(false);
        document.body.style.overflow = 'auto';
    };

    const Logout = () =>{
        dispatch(logout());
    }
    
    useEffect(() => {
        if (token) {
            getUser(token)
            .then((userData) => {
                if (userData) {
                    setUser(userData);
                }
            })
        }
    }, [dispatch, token]);
    let KtAvt = true;
    if( user?.avt == undefined || user?.avt == "https://a0.anyrgb.com/pngimg/1658/1292/little-boy-icon-little-girl-avatar-ico-icon-design-boy-cartoon-cartoon-character-sitting-cool.png"){
        console.log(user?.avt);
        KtAvt = true;
    }else{
        KtAvt = false;
    }


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
                            <div className={cx("dong-background", "effmo")} onClick={close}></div>
                            )}
                            {showLogin&& (
                            <div className={cx("dong-background")} onClick={close}></div>
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
                        <img src={(KtAvt? user?.avt: api(user?.avt)) || "https://animevietsub.us/statics/images/user-image.png"} width="30" height="30" alt="" className={cx("avatar")} onClick={handleProfileClick}/>
                        <FontAwesomeIcon icon={faEnvelope} />
                        <FontAwesomeIcon icon={faBell} />
                        <FontAwesomeIcon icon={faSearch} />
                        <FontAwesomeIcon icon={faArrowRightFromBracket} onClick={Logout}/>
                        {
                        showProfile && 
                        <div className={cx("popupProfile")}>
                               <Profile clicker={close}/>
                        </div>
                        }
                        {showProfile&& (
                            <div className={cx("dong-background", "effmo")} onClick={close}></div>
                        )}
                    </div>
                    }
                    
                </div>

            </Container>
        </Navbar>
        
     );
}
export default Header;