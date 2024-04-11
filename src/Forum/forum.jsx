
import classNames from 'classnames/bind';

import styles from "./forum.module.scss";
import { Button, Col, Container, Image, Row, Tab, Tabs } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherPointed, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import TiemNet from './tiemNet/tiemNet';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAllBaiViet } from '../Action/baiVietAction';
import {CircularProgress } from '@mui/material';
import moment from 'moment';
import { getUserById } from '../Action/userAction';

const cx = classNames.bind(styles)
function Forum() {
    const [baiViet, setBaiViet] = useState(null);
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    function swichColor(type) {
        switch (type) {
            case "1":
                return cx("timNguoiChsGame");
            case "2" ||  "3":
                return cx("HoiGame_giaitri");
            case "4":
               return cx("dichvu");
            case "5" || "6":
                return cx("gameMoi_QCGame");
            case "7" || "8":
                return cx("thaoLuan_TinTucGame");
            case "9" || "10":
                return cx("GiaoLuu_Drama");
            default:
                return "timNguoiChsGame";
  }
}
    useEffect(() => {
    getAllBaiViet()
        .then((DataBaiViet) => {
            if (DataBaiViet) {
                setBaiViet(DataBaiViet);
            }
        });
    }, []);

  const formatUploadTime = (uploadTime) => {
    const now = moment();
    const uploadDate = moment(uploadTime);

    const diff = now.diff(uploadDate, 'days');
    
    if (diff === 0) {
      return 'Hôm nay';
    } else if (diff === 1) {
      return '1 ngày trước';
    } else if (diff >= 2 && diff <= 7) {
      return `${diff} ngày trước`;
    } else {
        return uploadDate.format('DD-MM-YYYY');
    }
  };

    useEffect(() => {
    getUserById()
        .then((userData) => {
        if (userData) {
            setUserData(userData);
            console.log(userData[0].username);
        }
        });
    }, []);
  const getUserName = (id) => {
    const user = userData?.find((item) => item._id === id);
    return user ? user.username : null;
  }
  let reversedArray;
  if(baiViet){
    reversedArray = Array.from(baiViet).reverse();
  }
  

        (function(d, t) {
            var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
            v.onload = function() {
                window.voiceflow.chat.load({
                verify: { projectID: '6610989bed6f6d46ae251c9d' },
                url: 'https://general-runtime.voiceflow.com',
                versionID: 'production'
                });
            }
            v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
        })(document, 'script');
    return ( 
        <Container  className={cx('forum')}>
            <Row className={cx('text')}>
                <Col xl='9'>
                    <p>Chào mừng bạn đã tới diễn đàn Aki.</p>
                    <p>Chú ý: Đừng hỏi trong chat box, hãy dùng nút đăng bài</p>
                </Col>
                <Col xl='3'>
                    <Link to="/uppost"><Button className={cx("uploadChuDe")}>Đăng chủ đề <FontAwesomeIcon icon={faFeatherPointed}/></Button></Link>
                </Col>
            </Row>
            <Tabs
            defaultActiveKey="all"
            id="uncontrolled-tab-example"
            className={cx("tabs")}
            >
            <Tab eventKey="all" title="All" className={cx("tab")} >    
                {baiViet?
                    reversedArray.map((item, index) => {
                    return (
                        <Row key={item.id}>
                        <Col xl="9" className={cx("in_ty_ti")}>
                            <span className={cx("countUp", index + 1 === 1 ? "mot" : index + 1 === 2 ? "hai": index + 1 === 3 ? "ba" : "")}>{index + 1}</span>
                            <span className={cx("types", swichColor(item.types))}>{item.types}</span>
                            <a className={cx("title")}>{item.title}</a>
                        </Col>
                        <Col>
                            <a className={cx("uploadTime")}>{formatUploadTime(item.uploadTime)}</a>
                        </Col>
                        <Col className={cx("actor")}>
                            <a href="#">{getUserName(item.actor)}</a>
                        </Col>
                        </Row>
                    );
                    })
                :
                <div>
                    <CircularProgress style={{marginLeft: "500px"}} className={cx("loading")}></CircularProgress>
                </div>
            }
            </Tab>
            <Tab eventKey="hoidap" title="Hỏi Đáp" className={cx("tab")}>
                {baiViet?
                baiViet?.map((item, index) => {
                return (
                    <Row key={item.id}>
                    <Col xl='9' className={cx("in_ty_ti")}>
                        <span className={cx("countUp", index + 1 == 1 ? "mot" : index + 1 == 2 ? "hai": index + 1 == 3 ? "ba" : "")}>{index + 1}</span>
                        <span className={cx("types", swichColor(item.types))}>{item.types}</span>
                        <a className={cx("title")}>{item.title}</a>
                    </Col>
                    <Col>
                        <a className={cx("uploadTime")}>{formatUploadTime(item.uploadTime)}</a>
                    </Col>
                    <Col className={cx("actor")}>
                        {/* <a href='#'>{item.actor}</a> */}
                    </Col>
                    </Row>
                );
                })
                :
                <div>
                    <CircularProgress style={{marginLeft: "500px"}} className={cx("loading")}></CircularProgress>
                </div>
            }
            </Tab>
            <Tab eventKey="khac" title="Khác" className={cx("tab")}>
                                {baiViet?
                baiViet?.map((item, index) => {
                return (
                    <Row key={item.id}>
                    <Col xl='9' className={cx("in_ty_ti")}>
                        <span className={cx("countUp", index + 1 == 1 ? "mot" : index + 1 == 2 ? "hai": index + 1 == 3 ? "ba" : "")}>{index + 1}</span>
                        <span className={cx("types", swichColor(item.types))}>{item.types}</span>
                        <a className={cx("title")}>{item.title}</a>
                    </Col>
                    <Col>
                        <a className={cx("uploadTime")}>{formatUploadTime(item.uploadTime)}</a>
                    </Col>
                    <Col className={cx("actor")}>
                        {/* <a href='#'>{item.actor}</a> */}
                    </Col>
                    </Row>
                );
                })
                :
                <div>
                    <CircularProgress style={{marginLeft: "500px"}} className={cx("loading")}></CircularProgress>
                </div>
            }
            </Tab>
            </Tabs>
            <TiemNet/>
            
        </Container>
     );
}

export default Forum;