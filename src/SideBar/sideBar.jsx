import classNames from "classnames/bind";
import styles from "./sideBar.module.scss"
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListUl, faSheetPlastic } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);

function SideBar() {
    return ( 
        <div className={cx("sidebar")}>
        <Container >
            <Row>
                <Col xl='1'></Col>
                <Col xl='3' className={cx("Box")}>
                    <FontAwesomeIcon icon={faSheetPlastic} />
                    <span className={cx("title")}>Về Diễn Đàn</span>
                    <p>GamerAki.com à sân chơi chung dành cho những ai yêu thích Game.</p>
                </Col>
                <Col xl='3' className={cx("Box")}>
                    <FontAwesomeIcon icon={faListUl} />
                    <span className={cx("title")}>Lối tắt</span>
                    <Link to="/"><p>Trang Chủ</p></Link> <hr/>
                    <Link><p>Diễn Đàn</p></Link><hr/>
                    <Link><p>Liên Hệ</p></Link><hr/>
                </Col>
                <Col xl='3' className={cx("Box")}>
                    <FontAwesomeIcon icon={faListUl} />
                    <span className={cx("title")}>Liên Kết</span>
                    <Link to="https://dixgames.com/"><p>Tải Game Cr@ck</p></Link><hr/>
                    <Link><p>Steam</p></Link><hr/>
                    <Link><p>Steam</p></Link><hr/>
                </Col>
                <Col xl='2'></Col>
            </Row>
        </Container>
        </div>
     );
}

export default SideBar;