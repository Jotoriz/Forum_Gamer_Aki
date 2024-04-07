import axios from 'axios';
import { SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from './Types';
import { notification } from 'antd';
import { api } from '../api';

// Đăng ký
export const signup = (userData) => async (dispatch) => {
    try {
        const res = await axios.post(api('/api/signup'), userData);
        if (res.status === 201) {
            const { token } = res.data;
            localStorage.setItem('token', JSON.stringify(token));
            localStorage.setItem('authenticate', true);
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: res.data,
            });
            notification.success({
                description: 'Đăng ký thành công',
            });
            window.location.reload();
        } else {
            dispatch({
                type: SIGNUP_FAILURE,
                payload: { error: res.data.error },
            });
            notification.error({
                description: 'Đăng ký không thành công',
            });
        }
    } catch (error) {
        console.log('error', error);
        if (error.response.data.message == undefined) {
            if (error.response.data.error == 'valid email is required') {
                notification.error({
                    description: `Email chưa điền hoặc chưa đúng định dạng`,
                });
            } else if (error.response.data.error == 'user Name is required') {
                notification.error({
                    description: `Chưa điền tên tài khoản kìa`,
                });
            } else if (error.response.data.error == 'password must be at least 8 character long') {
                notification.error({
                    description: `mật khẩu phải ít nhất 8 kí tự`,
                });
            } else {
                notification.error({
                    description: error.response.data.error,
                });
            }
        } else {
            notification.error({
                description: `${error.response.data.message}`,
            });
        }
        dispatch({
            type: SIGNUP_FAILURE,
            payload: { error: error.response.data.message },
        });
    }
};

// Đăng nhập
export const signin = (userData) => async (dispatch) => {
    try {
        const res = await axios.post(api('/api/signin'), userData);
        if (res.status === 200) {
            const { token } = res.data;
            localStorage.setItem('token', JSON.stringify(token));
            localStorage.setItem('authenticate', true);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });
            notification.success({
                message: 'Thành Công',
                description: 'Đăng Nhập thành công',
            });
            window.location.reload();
        } else {
            dispatch({
                type: LOGIN_FAILURE,
                payload: { error: res.data.error },
            });
            notification.error({
                message: 'Lỗi',
                description: 'Đăng nhập không thành công',
            });
        }
    } catch (error) {
        console.log('error', error);
        if (error.response.data.message == undefined) {
            notification.error({
                description: `${error.response.data.error}`,
            });
        } else {
            notification.error({
                description: `${error.response.data.message}`,
            });
        }
        dispatch({
            type: LOGIN_FAILURE,
            payload: { error: error.response.data.message },
        });
    }
};
export const logout = () => async (dispatch) => {
    localStorage.removeItem('authenticate');
    localStorage.removeItem('token');
    dispatch({ type: LOGOUT_SUCCESS });
    window.location.reload();
};
