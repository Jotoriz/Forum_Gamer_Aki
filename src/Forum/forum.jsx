
import classNames from 'classnames/bind';

import styles from "./forum.module.scss";
import { Button, Col, Container, Image, Row, Tab, Tabs } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherPointed, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import TiemNet from './tiemNet/tiemNet';

const cx = classNames.bind(styles)
function Forum() {

    const testUploader = [
        {
            id: 1,
            Types:  "Game Mới",
            Title:  "Minet - Game Hosting Intel core i9-12900k. Nhập MINETINTELCOREI9 để nhận ưu đãi ( Minecraft, SA:MP, FiveM,....) mạnh mẽ, tốc độ cao mà giá vẫn rẻ",
            UploadTime: "30 phút trước",
            Actor: "rcong",
        },
        {
            id: 2,
            Types:  "Thảo Luận",
            Title:  "[VPSSieuToc.VN] VPS Việt Nam Chính Hãng - Chất Lượng - Giá Rẻ - Tự Động chỉ từ 50K/tháng",
            UploadTime: "Hôm nay lúc 13:05",
            Actor: "jatditbo",
        },
        {
            id: 3,
            Types:  "Giải Trí",
            Title:  "Có plugins nào để mở mini game ko anh em",
            UploadTime: "Thứ năm lúc 19:55",
            Actor: "KaUneaNoneX",
        },
        {
            id: 4,
            Types:  "Hỏi về Game",
            Title:  "Có plugins nào để mở mini game ko anh em",
            UploadTime: "Thứ năm lúc 19:55",
            Actor: "KaUneaNoneX",
        },
        {
            id: 5,
            Types:  "Tìm Người Chơi Game",
            Title:  "[VPSSieuToc.VN] VPS Việt Nam Chính Hãng - Chất Lượng - Giá Rẻ - Tự Động chỉ từ 50K/tháng",
            UploadTime: "Hôm nay lúc 13:05",
            Actor: "jatditbo",
        },
                {
            id: 5,
            Types:  "Tìm Người Chơi Game",
            Title:  "[VPSSieuToc.VN] VPS Việt Nam Chính Hãng - Chất Lượng - Giá Rẻ - Tự Động chỉ từ 50K/tháng",
            UploadTime: "Hôm nay lúc 13:05",
            Actor: "jatditbo",
        },
                {
            id: 5,
            Types:  "Tìm Người Chơi Game",
            Title:  "[VPSSieuToc.VN] VPS Việt Nam Chính Hãng - Chất Lượng - Giá Rẻ - Tự Động chỉ từ 50K/tháng",
            UploadTime: "Hôm nay lúc 13:05",
            Actor: "jatditbo",
        },
                {
            id: 5,
            Types:  "Tìm Người Chơi Game",
            Title:  "[VPSSieuToc.VN] VPS Việt Nam Chính Hãng - Chất Lượng - Giá Rẻ - Tự Động chỉ từ 50K/tháng",
            UploadTime: "Hôm nay lúc 13:05",
            Actor: "jatditbo",
        },
                {
            id: 5,
            Types:  "Tìm Người Chơi Game",
            Title:  "[VPSSieuToc.VN] VPS Việt Nam Chính Hãng - Chất Lượng - Giá Rẻ - Tự Động chỉ từ 50K/tháng",
            UploadTime: "Hôm nay lúc 13:05",
            Actor: "jatditbo",
        },
                {
            id: 5,
            Types:  "Tìm Người Chơi Game",
            Title:  "[VPSSieuToc.VN] VPS Việt Nam Chính Hãng - Chất Lượng - Giá Rẻ - Tự Động chỉ từ 50K/tháng",
            UploadTime: "Hôm nay lúc 13:05",
            Actor: "jatditbo",
        },
                {
            id: 5,
            Types:  "Tìm Người Chơi Game",
            Title:  "[VPSSieuToc.VN] VPS Việt Nam Chính Hãng - Chất Lượng - Giá Rẻ - Tự Động chỉ từ 50K/tháng",
            UploadTime: "Hôm nay lúc 13:05",
            Actor: "jatditbo",
        },
                {
            id: 5,
            Types:  "Tìm Người Chơi Game",
            Title:  "[VPSSieuToc.VN] VPS Việt Nam Chính Hãng - Chất Lượng - Giá Rẻ - Tự Động chỉ từ 50K/tháng",
            UploadTime: "Hôm nay lúc 13:05",
            Actor: "jatditbo",
        },
                {
            id: 5,
            Types:  "Tìm Người Chơi Game",
            Title:  "[VPSSieuToc.VN] VPS Việt Nam Chính Hãng - Chất Lượng - Giá Rẻ - Tự Động chỉ từ 50K/tháng",
            UploadTime: "Hôm nay lúc 13:05",
            Actor: "jatditbo",
        },
                {
            id: 5,
            Types:  "Tìm Người Chơi Game",
            Title:  "[VPSSieuToc.VN] VPS Việt Nam Chính Hãng - Chất Lượng - Giá Rẻ - Tự Động chỉ từ 50K/tháng",
            UploadTime: "Hôm nay lúc 13:05",
            Actor: "jatditbo",
        },
                {
            id: 5,
            Types:  "Tìm Người Chơi Game",
            Title:  "[VPSSieuToc.VN] VPS Việt Nam Chính Hãng - Chất Lượng - Giá Rẻ - Tự Động chỉ từ 50K/tháng",
            UploadTime: "Hôm nay lúc 13:05",
            Actor: "jatditbo",
        },
                {
            id: 5,
            Types:  "Tìm Người Chơi Game",
            Title:  "[VPSSieuToc.VN] VPS Việt Nam Chính Hãng - Chất Lượng - Giá Rẻ - Tự Động chỉ từ 50K/tháng",
            UploadTime: "Hôm nay lúc 13:05",
            Actor: "jatditbo",
        },
                {
            id: 5,
            Types:  "Tìm Người Chơi Game",
            Title:  "[VPSSieuToc.VN] VPS Việt Nam Chính Hãng - Chất Lượng - Giá Rẻ - Tự Động chỉ từ 50K/tháng",
            UploadTime: "Hôm nay lúc 13:05",
            Actor: "jatditbo",
        },
    ]
    function swichColor(type) {
  switch (type) {
    case "Tìm Người Chơi Game":
      return cx("timNguoiChsGame");
    case "Hỏi về Game" ||  "Thảo Luận":
      return cx("HoiGame_ThaoLuan");
    case "Giải Trí":
      return cx("giaiTri");
    case "Game Mới" || "Quảng Cáo Game":
      return cx("newGame");
    default:
      return "timNguoiChsGame";
  }
}
    return ( 
        <Container  className={cx('forum')}>
            <Row className={cx('text')}>
                <Col xl='9'>
                    <p>Chào mừng bạn đã tới diễn đàn Aki.</p>
                    <p>Chú ý: Đừng hỏi trong chat box, hãy dùng nút đăng bài</p>
                </Col>
                <Col xl='3'>
                    
                    <Button className={cx("uploadChuDe")}>Đăng chủ đề <FontAwesomeIcon icon={faFeatherPointed}/></Button>
                </Col>
            </Row>
            <Tabs
            defaultActiveKey="all"
            id="uncontrolled-tab-example"
            className={cx("tabs")}
            >
            <Tab eventKey="all" title="All" className={cx("tab")} >    
                {testUploader.reverse().map((item, index) => {
                return (
                    <Row key={item.id}>
                    <Col xl='9' className={cx("in_ty_ti")}>
                        <span className={cx("countUp", index + 1 == 1 ? "mot" : index + 1 == 2 ? "hai": index + 1 == 3 ? "ba" : "")}>{index + 1}</span>
                        <span className={cx("types", swichColor(item.Types))}>{item.Types}</span>
                        <a className={cx("title")}>{item.Title}</a>
                    </Col>
                    <Col>
                        <a className={cx("uploadTime")}>{item.UploadTime}</a>
                    </Col>
                    <Col className={cx("actor")}>
                        <a href='#'>{item.Actor}</a>
                    </Col>
                    </Row>
                );
                })}
            </Tab>
            <Tab eventKey="hoidap" title="Hỏi Đáp" className={cx("tab")}>
                {testUploader.map((item, index) => {
                    if(item.Types == "Hỏi về Game" ||item.Types == "Tìm Người Chơi Game"){
                return (
                    <Row key={item.id}>
                    <Col xl='9' className={cx("in_ty_ti")}>
                        <div className={cx("countUpDiv")}>
                        <span className={cx("countUp", index + 1 == 1 ? "mot" : index + 1 == 2 ? "hai": index + 1 == 3 ? "ba" : "")}>{index + 1}</span>
                        </div>
                        <span className={cx("types", swichColor(item.Types))}>{item.Types}</span>
                        <a className={cx("title")}>{item.Title}</a>
                    </Col>
                    <Col>
                        <a className={cx("uploadTime")}>{item.UploadTime}</a>
                    </Col>
                    <Col className={cx("actor")}>
                        <a href='#'>{item.Actor}</a>
                    </Col>
                    </Row>
                );
                }
                })}
            </Tab>
            <Tab eventKey="khac" title="Khác" className={cx("tab")}>
                {testUploader.map((item, index) => {
                return (
                    <Row key={item.id}>
                    <Col xl='9' className={cx("in_ty_ti")}>
                        <span className={cx("countUp", index + 1 == 1 ? "mot" : index + 1 == 2 ? "hai": index + 1 == 3 ? "ba" : "")}>{index + 1}</span>
                        <span className={cx("types", swichColor(item.Types))}>{item.Types}</span>
                        <a className={cx("title")}>{item.Title}</a>
                    </Col>
                    <Col>
                        <a className={cx("uploadTime")}>{item.UploadTime}</a>
                    </Col>
                    <Col className={cx("actor")}>
                        <a href='#'>{item.Actor}</a>
                    </Col>
                    </Row>
                );
                })}
            </Tab>
            </Tabs>
            <TiemNet/>
        </Container>
     );
}

export default Forum;