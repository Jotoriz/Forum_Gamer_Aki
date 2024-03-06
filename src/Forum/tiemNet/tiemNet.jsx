
import classNames from 'classnames/bind';

import styles from "./tiemNet.module.scss";
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
const cx = classNames.bind(styles)

function TiemNet() {

    const  [message, setMessage] = useState("");

    const clickMessage = (e) =>{
        e.preventDefault();
        setMessage(e.target.value);
    }
    

    const onSubmit = () =>{
        console.log(message);
    }

    const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSubmit();
    }
  };
    const handleClick = (event) => {
      onSubmit();
  };

    const tinNhan = [
        {
            id: 1,
            avatar: "https://i.pinimg.com/736x/0f/21/7d/0f217d0189f841ae794500966ab1845a.jpg",
            userName: "LA KaneMC",
            message: "Ai biết vẽ model leviathan blox fruit không z bằng blockbench )))",
            uploadTime: "Hôm nay"
        },
        {
            id: 2,
            avatar: "https://i.pinimg.com/736x/0f/21/7d/0f217d0189f841ae794500966ab1845a.jpg",
            userName: "Jotori",
            message: "https://discord.com/channels/507304429255393322/1213590726869520444 fabric modding my beloved",
            uploadTime: "Hôm nay"
        },
        {
            id: 3,
            avatar: "https://i.pinimg.com/736x/0f/21/7d/0f217d0189f841ae794500966ab1845a.jpg",
            userName: "ngongoclinh2008",
            message: "Custom Enchantments v2.1.7c cái phần /es nó bị sao z mn	",
            uploadTime: "Hôm nay"
        },
        {
            id: 4,
            avatar: "https://i.pinimg.com/736x/0f/21/7d/0f217d0189f841ae794500966ab1845a.jpg",
            userName: "Real",
            message: "Có ai chỉ mình tải bản mod 1.19 được không",
            uploadTime: "Hôm nay"
        },
               {
            id: 4,
            avatar: "https://i.pinimg.com/736x/0f/21/7d/0f217d0189f841ae794500966ab1845a.jpg",
            userName: "Real",
            message: "Có ai chỉ mình tải bản mod 1.19 được không",
            uploadTime: "Hôm nay"
        },
               {
            id: 4,
            avatar: "https://i.pinimg.com/736x/0f/21/7d/0f217d0189f841ae794500966ab1845a.jpg",
            userName: "Real",
            message: "Có ai chỉ mình tải bản mod 1.19 được không",
            uploadTime: "Hôm nay"
        },
               {
            id: 4,
            avatar: "https://i.pinimg.com/736x/0f/21/7d/0f217d0189f841ae794500966ab1845a.jpg",
            userName: "Real",
            message: "Có ai chỉ mình tải bản mod 1.19 được không",
            uploadTime: "Hôm nay"
        },
                       {
            id: 4,
            avatar: "https://i.pinimg.com/736x/0f/21/7d/0f217d0189f841ae794500966ab1845a.jpg",
            userName: "Real",
            message: "Có ai chỉ mình tải bản mod 1.19 được không",
            uploadTime: "Hôm nay"
        },
                       {
            id: 4,
            avatar: "https://i.pinimg.com/736x/0f/21/7d/0f217d0189f841ae794500966ab1845a.jpg",
            userName: "Real",
            message: "Có ai chỉ mình tải bản mod 1.19 được không",
            uploadTime: "Hôm nay"
        },
                       {
            id: 4,
            avatar: "https://i.pinimg.com/736x/0f/21/7d/0f217d0189f841ae794500966ab1845a.jpg",
            userName: "Real",
            message: "Có ai chỉ mình tải bản mod 1.19 được không",
            uploadTime: "Hôm nay"
        },
                       {
            id: 4,
            avatar: "https://i.pinimg.com/736x/0f/21/7d/0f217d0189f841ae794500966ab1845a.jpg",
            userName: "Real",
            message: "Có ai chỉ mình tải bản mod 1.19 được không",
            uploadTime: "Hôm nay"
        },
                       {
            id: 4,
            avatar: "https://i.pinimg.com/736x/0f/21/7d/0f217d0189f841ae794500966ab1845a.jpg",
            userName: "Real",
            message: "Có ai chỉ mình tải bản mod 1.19 được không",
            uploadTime: "Hôm nay"
        },
        
        
    ]

    const formatMessage = (message) => {
        const linkRegex = /(https?:\/\/[^\s]+)/g;
        const parts = message.split(linkRegex);

        return parts.map((part, index) => {
            if (part.match(linkRegex)) {
            return (
                <a href={part} target="_blank" rel="noopener noreferrer" key={index}>
                {part}
                </a>
            );
            } else {
            return <span key={index}>{part}</span>;
            }
        });
    };

    return ( 
        <div className={cx('tiem-net')}>
            <Row>
                <Col>
                    <FontAwesomeIcon icon={faComments}/>
                    <span className={cx("title")}>Tiệm Net</span>
                </Col>
            </Row>
            <hr/>
            <Row className={cx("khungChat")}>
                <Col>
                {
                    tinNhan.map((message, index)=>{
                        return(
                            <Row className={cx("chat")}>
                                <Col>
                                <img className={cx("avatar")} src={message.avatar}></img>
                                <a className={cx("userName")}>{message.userName}: </a>
                                <span className={cx("message")}>{formatMessage(message.message)}</span>
                                <span className={cx("uploadTime")}>{message.uploadTime}</span>
                                </Col>
                            </Row>
                        )
                    })
                }
                </Col>
            </Row>
            <Row  className={cx("nhapChat")}>
                <Col xl='11'>
                <input className={cx("input")} onChange={clickMessage} onKeyDown={handleKeyDown} value={message} placeholder="Hãy nhập tin nhắn của bạn" name="message"></input>
                </Col>
                <Col xl='1' className={cx("btn-gui")} >
                    <FontAwesomeIcon icon={faPaperPlane} onClick={handleClick} className={cx("icon-gui")}/>
                </Col>
            </Row>
        </div>
     );
}

export default TiemNet;