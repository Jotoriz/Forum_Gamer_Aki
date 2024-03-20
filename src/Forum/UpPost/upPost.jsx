

import classNames from "classnames/bind";
import styles from "./upPost.module.scss"
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faPen } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";

const cx = classNames.bind(styles);


function UpPost() {
    const [chuDe, setChuDe] = useState("");

    const handleChangeChuDe = (e) => {
        e.preventDefault();
        setChuDe(e.target.value);
    };
    
    function swichColor(type) {
        switch (type) {
                    case 1:
                        return cx("timNguoiChsGame");
                    case 2 ||  3:
                        return cx("HoiGame_ThaoLuan");
                    case 4:
                    return cx("giaiTri");
                    case 5 || 6:
                        return cx("newGame");
                    default:
                        return "timNguoiChsGame";
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return ( 
        <div className={cx("UpPost")}>
            <Row>
                <Col className={cx("Title")}>
                    <h3>Đăng chủ đề</h3>
                </Col>
            </Row>
            <Row>
                <Col className={cx("KhungInput")}>
                    <Row className={cx("Nhap_TieuDe", "align-items-center")}>
                        <Col xl="2">
                            <FormControl fullWidth variant="standard"  className={cx("Title_Chude")} >
                                <InputLabel>Chủ Đề</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={chuDe}
                                    onChange={handleChangeChuDe}
                                >
                                    <MenuItem value={1}><span className={cx("types", swichColor(1))}>Tìm Người Chơi Game</span></MenuItem>
                                    <MenuItem value={2}><span className={cx("types", swichColor(2))}>Hỏi về Game</span></MenuItem>
                                    <MenuItem value={3}><span className={cx("types", swichColor(4))}>Giải Trí</span></MenuItem>
                                </Select>
                            </FormControl>
                        </Col>
                        <Col xl="10">
                            <input className={cx("input_TieuDe")} placeholder="Nhập tiêu đề của bạn"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={cx("input_NoiDung_Cha")}>
                            <textarea  className={cx("input_NoiDung")} ></textarea>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={cx("btn_UpLoad_Cha")}>
                            <Button className={cx("btn_UpLoad")}><FontAwesomeIcon className={cx("icon_UpLoad")} icon={faPen}/> Đăng chủ đề</Button>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </div>
     );
}

export default UpPost;