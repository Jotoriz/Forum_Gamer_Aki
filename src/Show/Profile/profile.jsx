import classNames from 'classnames/bind';
import styles from "./profile.module.scss";
import { Col, Container, Row } from 'react-bootstrap';
import { Button, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';
import { UpdateAvatar, deleteOldAvatar, getUser, updateUser } from '../../Action/userAction';
import ChangePassword from './ChangePassword/changePassword';
import { api } from '../../api';

const cx = classNames.bind(styles)

function Profile({clicker}) {
    const [user, setUser] = useState(null);
    const [isloading, setIsloading] = useState(false);
    const [userName, setUserName] = useState(user?.username);
    const [showChangePassowrd, setShowChangePassowrd] = useState(false);
    const [imageSrc, setImageSrc] = useState('');
    const [selectedFile, setSelectedFile] = useState();
    const token = localStorage.getItem('token');


    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(e.target.files[0]);
        
        const src = URL.createObjectURL(file);
        setImageSrc(src);
    };

   const onFileUpload = () => {
    UpdateAvatar(selectedFile, token)
       .then(() => {
       });
   }
    
    const handleUserName = (e) =>{
        e.preventDefault();
        setUserName(e.target.value);
    }
    const addUsserName = {
        username: userName,
    }

    const openChangePassword = () => {
        setShowChangePassowrd(true);
    }
    const close = () => {
        setShowChangePassowrd(false);
    };

    const HoanThanh = () => {
        if (token) {
            updateUser(token, addUsserName, user?.username);
        }
    };

    useEffect(() => {
        if (token) {
            getUser(token)
            .then((userData) => {
                if (userData) {
                    setUser(userData);
                    setUserName(userData?.username)
                }
            })
        }
    }, [token]);

    let KtAvt = true;
    if( user?.avt == undefined || user?.avt == "https://a0.anyrgb.com/pngimg/1658/1292/little-boy-icon-little-girl-avatar-ico-icon-design-boy-cartoon-cartoon-character-sitting-cool.png"){
        console.log(user?.avt);
        KtAvt = true;
    }else{
        KtAvt = false;
    }
    return ( 
        user?
            <Container className={cx("profile")}>
  
            <Row>
                <Col xl='4' className={cx("profile_Left")}>
                            <img src={(KtAvt? user?.avt: api(user?.avt)) || "https://animevietsub.us/statics/images/user-image.png"} className={cx("avatar")}></img>
                            <p className={cx("userName")}>{user?.username}</p>
                </Col>
                <Col xl='8'>
                    <h2>THÔNG TIN TÀI KHOẢN</h2>
                    <Row className={cx("form")}>
                        <Col xl='2'><span>Email</span></Col>
                        <Col >
                            
                            <input className={cx("input_email")} name='email' disabled value={user?.email}></input>
                        </Col>
                    </Row>
                    <Row className={cx("form")}> 
                        <Col xl='2'><span>User Name</span></Col>
                        <Col xl='7'>
                            
                            <input className={cx("input_userName")} name='username' value={userName} onChange={handleUserName}></input>
                        </Col>
                        <Col xl='3'><Button variant="contained" color="success" onClick={HoanThanh}>Đổi User Name</Button></Col>
                    </Row>
                    <Row className={cx("form")}>
                        <Col xl='2'>Avatar</Col>
                        <Col> 
                            <Button
                                className={cx("Out_input_upload")} 
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                >
                                Upload file
                                <input className={cx("input_upload")} type="file" name="myImage" accept="image/*" onChange={handleFileChange}/>
                            </Button>
                        </Col>
                        <Col xl='2'>{imageSrc && <img className={cx("image_preview")} src={imageSrc} alt="Preview" />}</Col>
                        <Col>
                            <Button variant="contained" color="success" onClick={onFileUpload}>Thay Avatar</Button>
                        </Col>
                    </Row>
                    <Row className={cx("form")}>
                        <Col xl='3'><span className={cx("btn_doimk")}>Mật Khẩu</span></Col>
                        <Col >
                            <Button variant="contained" onClick={openChangePassword}>Đổi Mật Khẩu</Button>
                            {showChangePassowrd && 
                                <div className={cx("popupChangePassword")}>
                                    <ChangePassword/>
                                </div>
                            }
                            {showChangePassowrd && 
                                <div className={cx("dong-background")} onClick={close}></div>
                            }
                        </Col>
                    </Row>
                    <Row className={cx("form_close")}>
                        <Col>
                        </Col>
                        <Col xl="3">
                            <Button variant="outlined" color="error" className={cx("btn_thoat")} onClick={clicker}>Thoát</Button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
        :
        <div>
            <CircularProgress style={{marginLeft: "500px"}} className={cx("loading")}></CircularProgress>
        </div>
        
     );
}

export default Profile;