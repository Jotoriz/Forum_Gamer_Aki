
import classNames from 'classnames/bind';

import styles from "./tiemNet.module.scss";
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../Action/tiemnetAction';
const cx = classNames.bind(styles)

function TiemNet() {
    const  [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    const dispath = useDispatch();

    useEffect(() => {
        const storedMessages = JSON.parse(localStorage.getItem('messages')) || [];
        setMessages(storedMessages);
    }, []);



    const clickMessage = (e) =>{
        e.preventDefault();
        setMessage(e.target.value);
    }
    const Time = () => {
        const now = new Date();

        // Lấy thông tin về thời gian hiện tại
        const year = now.getFullYear(); // Năm (ví dụ: 2022)
        const month = now.getMonth() + 1; // Tháng (giá trị từ 0 - 11, cộng thêm 1 để hiển thị từ 1 - 12)
        const date = now.getDate(); // Ngày trong tháng (giá trị từ 1 - 31)

        // Tạo chuỗi đại diện cho ngày tháng năm
        const formattedDate = `${date}/${month}/${year}`;

        return formattedDate;
    };
    const user = JSON.parse( localStorage.getItem("user"));
    const username = user && user.username ? user.username : "Ai đó";
    const TTMessage = {
        avatar: "",
        username: username,
        message: message,
        uploadTime: Time()
    };
    const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();
        const inputElement = event.target;
        inputElement.value = '';
        onSubmit(event);
        
    }
  };
      const onSubmit = () =>{
        if(message != ""){
            dispath(addMessage(TTMessage));
            setMessages([...messages, TTMessage]);
            setMessage("");
        }
    }

    const handleClick = (event) => {
      onSubmit();
  };

    // const tinNhan = JSON.parse(localStorage.getItem('messages')) || [];

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
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);
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
                    messages.map((message, index)=>{
                        return(
                            <Row className={cx("chat")} ref={index === messages.length - 1 ? messagesEndRef : null}>
                                <Col>
                                {message.avatar &&<img className={cx("avatar")} src={message.avatar}></img>}
                                
                                <a className={cx("userName",username == message.username? "chinhChu": "" )}>{message.username}: </a>
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