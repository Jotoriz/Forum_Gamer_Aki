import axios from 'axios';
import { GET_USER_BY_ID_FAILURE, GET_USER_BY_ID_SUCCESS } from './Types';

export const getUser = (token) => async (dispatch) => {
    try {
        const res = await axios.get('http://localhost:8000/api/user/:id', {
            headers: {
                Authorization: `Bearer ${dinhDangToken(token)}`,
            },
        });
        if (res.status === 200) {
            dispatch({
                type: GET_USER_BY_ID_SUCCESS,
                payload: res.data,
            });
        } else {
            dispatch({
                type: GET_USER_BY_ID_FAILURE,
                payload: res.data.message,
            });
        }
    } catch (error) {
        dispatch({
            type: GET_USER_BY_ID_FAILURE,
            payload: error.message,
        });
    }
};
function dinhDangToken(token) {
    if (token.startsWith('"') && token.endsWith('"')) {
        return token.slice(1, -1);
    }
    return token;
}
