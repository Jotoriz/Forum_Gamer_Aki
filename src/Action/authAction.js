import axios from 'axios';
import { SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from './Types';
import { notification } from 'antd';

// Đăng ký
export const signup = (userData) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:8000/api/signup', userData);
        if (res.status === 201) {
            const { token } = res.data;
            localStorage.setItem('token', JSON.stringify(token));
            localStorage.setItem('authenticate', true);
            dispatch({
                type: SIGNUP_SUCCESS,
                payload: res.data,
            });
            notification.success({
                message: 'Thành Công',
                description: 'Đăng ký thành công',
            });
            window.location.reload();
        } else {
            dispatch({
                type: SIGNUP_FAILURE,
                payload: { error: res.data.error },
            });
            notification.error({
                message: 'Lỗi',
                description: 'Đăng ký không thành công',
            });
        }
    } catch (error) {
        console.log('error', error);
        if (error.response.data.message == undefined) {
            notification.error({
                message: 'Error',
                description: `${error.response.data.error}`,
            });
        } else {
            notification.error({
                message: 'Error',
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
        const res = await axios.post('http://localhost:8000/api/signin', userData);
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
                message: 'lỗi',
                description: `${error.response.data.error}`,
            });
        } else {
            notification.error({
                message: 'lỗi',
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
