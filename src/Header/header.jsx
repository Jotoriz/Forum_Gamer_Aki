import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faBell, faSearch, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';

import styles from "./header.module.scss";
import Logo from "../img/Logo.jpg"

const cx = classNames.bind(styles)

function Header() {
    return ( 
        <Navbar className={cx("header")}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={Logo} width="30" height="30" alt="" />
                </Navbar.Brand>
                <Nav className={cx("swicher")}>
                    <Nav href="#home" className={cx("hover")}>HOME</Nav>
                    <Nav href="#features" className={cx("hover", window.location.pathname === '/'? "DienDan" : "" )}>DIỄN ĐÀN</Nav>
                    <Nav href="#pricing" className={cx("hover")}>TÀI NGUYÊN</Nav>
                </Nav>
                <div className={cx("right")}>
                    <FontAwesomeIcon icon={faEnvelope} />
                    <FontAwesomeIcon icon={faBell} />
                    <FontAwesomeIcon icon={faSearch} />
                    <FontAwesomeIcon icon={faEllipsisV} />
                </div>
            </Container>
        </Navbar>
        
     );
}

export default Header;