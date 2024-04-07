import axios from 'axios';
import { GET_USER_BY_ID_FAILURE, GET_USER_BY_ID_SUCCESS } from './Types';
import { notification } from 'antd';
import { useSelector } from 'react-redux';
import { api } from '../api';

export const getUser = async (token) => {
    try {
        const res = await axios.get(api('/api/user/:id'), {
            headers: {
                Authorization: `Bearer ${dinhDangToken(token)}`,
            },
        });
        return res.data;
    } catch (error) {
        console.error('Lỗi khi lấy thông tin người dùng:', error);
        return null;
    }
};
export const updateUser = async (token, username, lastUsername) => {
    try {
        const res = await axios.put(api('/api/user/:id'), username, {
            headers: {
                Authorization: `Bearer ${dinhDangToken(token)}`,
            },
        });

        if (res.status === 200 && username.username != lastUsername) {
            notification.success({
                message: 'Đổi User Name thành công',
            });
            setTimeout(() => {
                window.location.reload();
            }, 900);
        } else {
            notification.error({
                message: 'Tên như cũ mà Hmm?',
            });
        }
    } catch (error) {
        console.log('lỗi: ' + error);
        notification.error({
            message: error,
        });
    }
};

export const ChangePasswordUser = async (token, PassUser, rePassword) => {
    try {
        if (PassUser.newPassword.length < 8 || rePassword.length < 8) {
            notification.error({
                message: 'Mật khẩu phải có ít nhất 8 kí tự',
            });
            return;
        }
        if (PassUser.newPassword != rePassword) {
            notification.error({
                message: 'Nhập lại mật khẩu không giống nhau',
            });
            return;
        }
        if (PassUser.newPassword == PassUser.oldPassword) {
            notification.error({
                message: 'mật khẩu mới không được giống mật khẩu cũ',
            });
            return;
        }
        const res = await axios.put(api('/api/user/changepassword/:id'), PassUser, {
            headers: {
                Authorization: `Bearer ${dinhDangToken(token)}`,
            },
        });

        if (res.status === 200) {
            notification.success({
                message: 'Đổi mật khẩu thành công',
            });
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }
    } catch (error) {
        notification.error({
            message: error.response.data.message,
        });
    }
};

function dinhDangToken(token) {
    if (token.startsWith('"') && token.endsWith('"')) {
        return token.slice(1, -1);
    }
    return token;
}

export const UpdateAvatar = async (selectedFile, token) => {
    try {
        const formData = new FormData();
        formData.append('avt', selectedFile);
        console.log(formData);
        console.log(dinhDangToken(token));
        const res = await axios.post(api('/api/upload'), formData, {
            headers: {
                Authorization: `Bearer ${dinhDangToken(token)}`,
                'content-type': 'multipart/form-data',
            },
        });

        if (res.status === 200) {
            notification.success({
                message: 'Đổi Avatar thành công',
            });
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        } else {
            notification.error({
                message: 'Hình như bạn chưa chọn file .-.',
            });
        }
    } catch (error) {
        notification.error({
            message: 'Hình như bạn chưa chọn file .-.',
        });
    }
};
