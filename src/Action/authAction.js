import axios from 'axios';
import { SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE } from './Types';

// Đăng ký
export const signup = (userData) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:8000/api/signup', userData);

        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: SIGNUP_FAILURE,
            payload: error.response.data.error,
        });
    }
};

// Đăng nhập
export const login = (userData) => async (dispatch) => {
    try {
        const res = await axios.post('http://localhost:8000/api/signin', userData);

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });
    } catch (error) {
        dispatch({
            type: LOGIN_FAILURE,
            payload: error.response.data.error,
        });
    }
};
