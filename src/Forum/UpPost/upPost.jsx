

import classNames from "classnames/bind";
import styles from "./upPost.module.scss"
import { Button, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faPen } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { getUser } from "../../Action/userAction";
import { createBaiViet } from "../../Action/baiVietAction";

const cx = classNames.bind(styles);


function UpPost() {
    const [type, setType] = useState(0);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [user, setUser] = useState(null);
    const token = localStorage.getItem('token');

    const handleChangeType = (e) => {
        e.preventDefault();
        setType(e.target.value);
    };
    const handleChangeTitle = (e) => {
        e.preventDefault();
        setTitle(e.target.value);
    };
    const handleChangeContent = (e) => {
        e.preventDefault();
        setContent(e.target.value);
    };
    const types = [
        { type: 0, title: "Chưa Chọn" },
        { type: 1, title: "Tìm Người Chơi Game" },
        { type: 2, title: "Hỏi về Game" },
        { type: 3, title: "Giải Trí" },
        { type: 4, title: "Dịch Vụ" },
        { type: 5, title: "Game Mới" },
        { type: 6, title: "Quảng Cáo Game" },
        { type: 7, title: "Thảo Luận" },
        { type: 8, title: "Tin Tức Game" },
        { type: 9, title: "Giao Lưu" },
        { type: 10, title: "Drama" },
    ]
    function swichColor(type) {
        switch (type) {
            case 1:
                return "timNguoiChsGame";
            case 2 ||  3:
                return "HoiGame_giaitri";
            case 4:
               return "dichvu";
            case 5 || 6:
                return "gameMoi_QCGame";
            case 7 || 8:
                return "thaoLuan_TinTucGame";
            case 9 || 10:
                return "GiaoLuu_Drama";
            default:
                return "timNguoiChsGame";
        }
    }
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        if (token) {
            getUser(token)
            .then((userData) => {
                if (userData) {
                    setUser(userData);
                }
            })
        }
    }, [token]);
    const submit = () =>{
        createBaiViet(type, title, user._id, content);
    }
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
                                    id="demo-simple-select-label"
                                    value={type}
                                    onChange={handleChangeType}
                                >
                                    {types.map((item, index) => {
                                        return (
                                            <MenuItem key={item.type} value={item.type}>
                                                <span className={cx("types", swichColor(item.type))}>{item.title}</span>
                                            </MenuItem>
                                        );
                                    })}
                                                                        
                                </Select>
                            </FormControl>
                        </Col>
                        <Col xl="10">
                            <input className={cx("input_TieuDe")} onChange={handleChangeTitle} placeholder="Nhập tiêu đề của bạn"></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={cx("input_NoiDung_Cha")}>
                            <textarea  className={cx("input_NoiDung")} onChange={handleChangeContent} ></textarea>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={cx("btn_UpLoad_Cha")}>
                            <Button onClick={submit} className={cx("btn_UpLoad")}><FontAwesomeIcon className={cx("icon_UpLoad")} icon={faPen}/> Đăng chủ đề</Button>
                        </Col>
                    </Row>

                </Col>
            </Row>
        </div>
     );
}

export default UpPost;