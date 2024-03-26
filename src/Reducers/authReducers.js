import { SIGNUP_SUCCESS, SIGNUP_FAILURE, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS } from '../Action/Types';

const initialState = {
    authenticate: localStorage.getItem('authenticate') || false,
    user: localStorage.getItem('user') || null,
    error: null,
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGNUP_SUCCESS:
        case LOGIN_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.user,
                error: null,
            };
        case SIGNUP_FAILURE:
        case LOGIN_FAILURE:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: action.payload,
            };
        case LOGOUT_SUCCESS:
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                error: null,
            };
        default:
            return state;
    }
};

export default authReducer;
